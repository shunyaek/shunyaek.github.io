import { useState } from 'react'
import { Card } from './components/radioParts'
import { Avatar, H3, Label, RadioGroup, Separator, Text, View } from 'tamagui'
import { useMedia } from 'tamagui'

const data = {
  rs_americano: {
    checked: false,
    title: 'Americano',
    desc: 'Espresso with hot water',
    key: 'rs_americano',
    avatar: 'https://tamagui.dev/bento/images/coffee1.jpg',
  },
  rs_cappucino: {
    checked: false,
    title: 'Cappucino',
    desc: 'Espresso with steamed milk foam',
    key: 'rs_cappucino',
    avatar: 'https://tamagui.dev/bento/images/coffee2.jpg',
  },
  rs_espresso: {
    checked: false,
    title: 'Espresso',
    desc: 'A concentrated form of coffee served in shots',
    key: 'rs_espresso',
    avatar: 'https://tamagui.dev/bento/images/coffee3.jpg',
  },
  rs_flatWhite: {
    checked: false,
    title: 'Flat White',
    desc: 'Espresso with steamed milk',
    key: 'rs_flatWhite',
    avatar: 'https://tamagui.dev/bento/images/coffee4.jpg',
  },
  rs_latte: {
    title: 'Latte',
    checked: false,
    desc: 'Espresso with steamed milk',
    key: 'rs_latte',
    avatar: 'https://tamagui.dev/bento/images/coffee5.jpg',
  },
}

type Item = { checked: boolean; desc: string; title: string; key: string; avatar: string }

/** ------ EXAMPLE ------ */
export function RadioList() {
  const { sm } = useMedia()

  const [selected, setSelected] = useState<string>()

  const items = Object.values(data)

  return (
    <View
      borderColor="$color6"
      bs="solid"
      maxWidth="100%"
      minWidth="100%"
      gap="$4"
      overflow="hidden"
      borderWidth={0}
      borderRadius={0}
      backgroundColor="$background"
      $theme-dark={{
        borderColor: '$color3',
        borderWidth: 1,
      }}
      $group-window-sm={{
        padding: '$4',
        borderWidth: 0,
      }}
      $group-window-gtSm={{
        maxWidth: 400,
        minWidth: 400,
        shadowOpacity: 1,
        shadowColor: '$shadowColor',
        shadowRadius: '$4',
        shadowOffset: { height: 4, width: 0 },
        backgroundColor: '$color2',
        borderWidth: 0.5,
        borderRadius: 20,
        paddingBottom: '$3',
      }}
    >
      <RadioGroup
        value={selected}
        onValueChange={(next) => setSelected(next)}
        alignSelf="center"
        alignItems="center"
        width="100%"
        $group-window-sm={{
          gap: '$2',
        }}
      >
        <View paddingVertical="$3" alignItems="center">
          <H3>Drink</H3>
          <Text alignSelf="center" fos="$5" lh="$5" color="$color9">
            Select your favorite coffee
          </Text>
        </View>

        {sm && (
          <View width="100%" paddingHorizontal="$2">
            <Separator width="100%" borderColor="$color5" />
          </View>
        )}

        <View width="100%" gap="$2" paddingHorizontal="$2">
          {items.map((item, i) => (
            <Item
              setSelected={(next) => setSelected(next)}
              selected={selected === item.key}
              key={item.key + i}
              item={item}
            />
          ))}
        </View>
      </RadioGroup>
    </View>
  )
}

function Item({
  item,
  setSelected,
  selected,
}: {
  item: Item
  selected: boolean
  setSelected: (value: string) => void
}) {
  const { desc, title, key } = item
  return (
    <Card
      borderRadius={20}
      paddingHorizontal="$4"
      paddingVertical="$4"
      flexDirection="row"
      width="100%"
      gap="$3"
      active={selected}
      alignItems="stretch"
      justifyContent="space-between"
      onPress={() => {
        setSelected(key)
      }}
      borderWidth={1}
      borderColor="$color5"
      $group-window-sm={{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        paddingVertical: '$4',
      }}
      animation="100ms"
    >
      <Avatar circular size="$4">
        <Avatar.Image accessibilityLabel="Cam" src={item.avatar} />
        <Avatar.Fallback backgroundColor="$background" />
      </Avatar>

      <View flex={10} alignSelf="stretch" gap="$0.5">
        <Label
          // visual offset of font to top
          marginTop={-2}
          marginRight="auto"
          size="$5"
          lineHeight="$4"
          htmlFor={key}
        >
          {title}
        </Label>
        <Text fos="$3" width="100%" lh="$1" color="$color10">
          {desc}
        </Text>
      </View>

      <View onPress={(e) => e.stopPropagation()}>
        <RadioGroup.Item id={key} value={key}>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
      </View>
    </Card>
  )
}

RadioList.fileName = 'RadioList'
