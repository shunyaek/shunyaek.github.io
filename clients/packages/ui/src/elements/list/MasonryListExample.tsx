import type { FC, ReactElement } from 'react'
import { Image, View, Text, Button, type ThemeName } from 'tamagui'
import { useMemo } from 'react'

import { MasonryList } from './components/MasonryList'
import type { Product } from './data/products'
import { useData } from './data/products'
import { useWindowDimensions } from 'tamagui'
import { Hash, MapPin, ShoppingBag } from '@tamagui/lucide-icons'
import { Chip } from '../chips/components/chipsParts'

const colors = ['red', 'green', 'blue', 'purple', 'pink', 'orange']

const ProductItem: FC<{ item: Product }> = ({ item }) => {
  const heightFactor = useMemo(() => Math.random() < 0.5, [])

  return (
    <View flexDirection="column" key={item.id} mb="$6" flex={1} gap="$2.5">
      <View
        flexDirection="column"
        borderRadius="$10"
        shadowColor="$shadowColor"
        shadowRadius={5}
        overflow="hidden"
        hoverStyle={{ borderRadius: '$8' }}
        pressStyle={{ borderRadius: '$8' }}
        animation="quick"
      >
        <Image
          source={{ uri: item.image }}
          height={heightFactor ? 200 : 350}
          alignSelf="stretch"
          objectFit="cover"
        />
        <View
          flex={1}
          height="100%"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          borderRadius="$8"
          hoverStyle={{
            backdropFilter: 'blur(15px)',
            backgroundColor: '$background05',
          }}
          pressStyle={{
            backdropFilter: 'blur(15px)',
            backgroundColor: '$background05',
          }}
          animation="medium"
        >
          <Text
            flex={1}
            padding="$6"
            fontSize="$5"
            fontWeight="600"
            lineHeight="$2"
            color="$color12"
            opacity={0}
            hoverStyle={{ opacity: 1 }}
            pressStyle={{ opacity: 1 }}
            animation="medium"
          >
            {item.desc}
          </Text>
        </View>
      </View>

      <View flexDirection="column" gap="$2.5">
        <Text color="$color12" fontSize="$8" fontWeight="600" lineHeight="$6">
          {item.name}
        </Text>

        <View
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          gap="$2.5"
        >
          <View flexDirection="row" alignItems="center" gap="$2" theme="alt1">
            <MapPin size="$1" color="$color10" />
            <Text color="$color10" fontSize="$3">
              {item.city}
            </Text>
          </View>
          <Text color="$color11" theme="green" fontSize="$6" fontWeight="600">
            ${Math.floor(Number(item.price) / 10)}
          </Text>
        </View>

        <View
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          gap="$2.5"
        >
          <Chip
            rounded
            width="auto"
            size="$2"
            backgroundColor="$color4"
            theme={`${colors[Math.floor(Math.random() * colors.length)]}` as ThemeName}
          >
            <Chip.Icon y={-1} scaleIcon={1.1} color="$color9">
              <Hash />
            </Chip.Icon>
            <Chip.Text color="$color9">{item.category}</Chip.Text>
          </Chip>

          <Button themeInverse size="$2.5" icon={ShoppingBag}>
            Add
          </Button>
        </View>
      </View>
    </View>
  )
}

export const MasonryListExample = () => {
  const { data } = useData()
  const { width: deviceWidth } = useWindowDimensions()
  const numberOfColumns = Math.max(Math.round(deviceWidth / 300), 1)

  const renderItem = ({
    item,
    i,
  }: {
    item: (typeof data)[0]
    i: number
  }): ReactElement => {
    return <ProductItem item={item} />
  }

  return (
    <View
      flex={1}
      flexDirection="column"
      width="100%"
      height={700}
      $group-window-sm={{
        paddingHorizontal: '$4',
        paddingVertical: '$4',
      }}
      $group-window-gtSm={{
        paddingHorizontal: 24,
        paddingVertical: 48,
      }}
    >
      <MasonryList
        keyExtractor={(item): string => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          flex: 1,
          alignSelf: 'stretch',
        }}
        gap="$4"
        key={numberOfColumns}
        numColumns={numberOfColumns}
        data={data}
        //@ts-ignore
        renderItem={renderItem}
      />
    </View>
  )
}

MasonryListExample.fileName = 'MasonryListExample'
