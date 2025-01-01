import { useEffect, useState } from 'react'
import { Anchor, H2, Image, Stack, Text, XStack, YStack, styled } from 'tamagui'
import { getProducts } from './data/products'

const Link = Anchor

type Product = ReturnType<typeof getProducts>[0]

const StyledText = styled(Text, {
  color: '$color',
  fontSize: '$4',
  lineHeight: '$4',
})

function Item({ item }: { item: Product }) {
  return (
    // Note: you can also use `Link` from solito/link
    <Link flexGrow={1} flexBasis={300} href="#" textDecorationColor="transparent">
      <YStack
        paddingBottom="$2"
        borderBottomWidth={1}
        borderColor="$color5"
        gap="$2"
        tag="article"
        role="article"
      >
        <Stack overflow="hidden" width="100%" height={300}>
          <Image
            source={{ uri: item.image }}
            height="100%"
            width="100%"
            resizeMode="cover"
          />
        </Stack>
        <YStack>
          <H2 size="$4">{item.name}</H2>
          <XStack gap="$3">
            <StyledText fontWeight="bold">${item.price}</StyledText>
            <StyledText theme="alt1" textDecorationLine="line-through">
              ${item.price}
            </StyledText>
          </XStack>
        </YStack>
      </YStack>
    </Link>
  )
}

// spacers are a method to avoid streteched items at the end
const someSpacers = Array.from({ length: 5 }).map((_c, index) => (
  <YStack key={index + 'sp'} flexBasis={300} flexGrow={1} flexShrink={1} />
))
/**
 *  Note: if you have a lot of items, you can use a FlatList instead, Flatlist are more performant
 *        we also have a FlatGrid component that uses FlatList check that
 *
 */

/** ------ EXAMPLE ------ */
export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    setProducts(getProducts())
  }, [])
  return (
    <XStack
      maxWidth="100%"
      flexWrap="wrap"
      rowGap="$8"
      columnGap="$3"
      padding="$3"
      paddingHorizontal="$6"
      maxHeight={900}
      $group-window-xs={{
        paddingHorizontal: '$3',
      }}
    >
      {products.map((item, index) => (
        <Item key={item.id} item={item} />
      ))}
      {someSpacers}
    </XStack>
  )
}

ProductList.fileName = 'ProductList'
