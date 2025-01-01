import { useState, useEffect, useMemo } from 'react'
import { useLocalStorage } from 'foxact/use-local-storage'
import type { Tokens } from '@tamagui/core'
import { getTokens } from '@tamagui/core'

type MergedToken = Tokens & { userMatch: Tokens }

const useTokenMapper = () => {
  const [userTamaguiConfig] = useLocalStorage<string | null>('userTamaguiConfig', '')
  const [mappedTokens, setMappedTokens] = useState<Tokens | null>(null)
  const bentoTokens = getTokens()

  useEffect(() => {
    if (bentoTokens && userTamaguiConfig) {
      const userTokensConfig = JSON.parse(userTamaguiConfig).tamaguiConfig.tokens
      const mapped = mapBentoTokensToUserTokens(
        bentoTokens,
        userTokensConfig
      ) as MergedToken
      setMappedTokens(mapped || null)
    }
  }, [bentoTokens, userTamaguiConfig])

  const userTokens = userTamaguiConfig
    ? JSON.parse(userTamaguiConfig)?.tamaguiConfig?.tokens
    : null

  function mapBentoTokensToUserTokens(bentoTokens, userTokens) {
    function findClosestUserToken(bentoTokenVal, userTokens) {
      let closest = null
      let smallestDifference = Infinity
      // userTokens is an object where each key is a category and each value is an object of tokens within that category.
      Object.values(userTokens).forEach((userToken: any) => {
        const difference = Math.abs(userToken.val - bentoTokenVal)
        if (difference < smallestDifference) {
          smallestDifference = difference
          closest = userToken as typeof closest
        }
      })

      return closest
    }

    const mappedTokens = {}

    Object.keys(bentoTokens).forEach((category) => {
      if (!userTokens[category]) {
        console.error(`No user tokens found for category: ${category}`)
        return
      }

      mappedTokens[category] = {}

      Object.entries(bentoTokens[category]).forEach(([key, bentoToken]) => {
        // Ensure we're comparing like with like
        if (userTokens[category] && userTokens[category][key]) {
          const closestUserToken = findClosestUserToken(
            // @ts-expect-error
            bentoToken.val,
            userTokens[category]
          )
          if (closestUserToken) {
            mappedTokens[category][key] = {
              // @ts-expect-error
              ...bentoToken,
              userMatch: closestUserToken, // Adjusted to directly use closestUserToken
            }
          } else {
            // If no closest token is found, keep the original
            mappedTokens[category][key] = bentoToken
          }
        }
      })
    })

    return mappedTokens
  }

  return {
    mappedTokens,
    userTokens,
    bentoTokens,
  }
}

export default useTokenMapper
