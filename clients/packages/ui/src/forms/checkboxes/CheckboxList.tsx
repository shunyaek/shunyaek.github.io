import { Check } from '@tamagui/lucide-icons'
import { useEffect, useId, useState } from 'react'
import { Text, View, Avatar, debounce, Label, Separator } from 'tamagui'
import { Checkboxes } from './common/checkboxParts'

const items = [
  {
    checked: false,
    title: 'Americano',
    desc: 'Espresso with hot water',
    key: 'americano',
    avatar: 'https://tamagui.dev/bento/images/coffee1.jpg',
  },
  {
    checked: false,
    title: 'Cappucino',
    desc: 'Espresso with steamed milk foam',
    key: 'cappucino',
    avatar: 'https://tamagui.dev/bento/images/coffee2.jpg',
  },
  {
    checked: false,
    title: 'Espresso',
    desc: 'A concentrated form of coffee served in shots',
    key: 'espresso',
    avatar: 'https://tamagui.dev/bento/images/coffee3.jpg',
  },
  {
    checked: false,
    title: 'Flat White',
    desc: 'Espresso with steamed milk',
    key: 'flatWhite',
    avatar: 'https://tamagui.dev/bento/images/coffee4.jpg',
  },
  {
    title: 'Latte',
    checked: false,
    desc: 'Espresso with steamed milk',
    key: 'latte',
    avatar: 'https://tamagui.dev/bento/images/coffee5.jpg',
  },
]

/** ------ EXAMPLE ------ */
export function CheckboxList() {
  const [values, setValues] = useState<Record<string, boolean>>([] as any)
  const uniqueId = useId()

  useEffect(() => {
    setValues(Object.fromEntries(items.map((item) => [item.key, false])))
  }, [])

  const onValuesChange = debounce((values: any) => {
    setValues(values)
  })

  return (
    <Checkboxes
      values={values}
      onValuesChange={onValuesChange}
      borderColor="$color6"
      bs="solid"
      maxWidth="100%"
      overflow="hidden"
      $group-window-gtXs={{
        width: 400,
        elevation: '$3',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: '$color2',
      }}
      borderWidth={0}
      borderRadius={0}
      backgroundColor="$background"
    >
      <Checkboxes.FocusGroup>
        <View
          flexDirection="column"
          paddingVertical="$4"
          alignSelf="center"
          alignItems="center"
        >
          <Checkboxes.Title alignSelf="center" paddingHorizontal="$10" lineHeight={'$2'}>
            Coffee
          </Checkboxes.Title>
          <Text fontSize="$3" fontWeight="$3" lineHeight="$3" theme="alt1" marginTop="$2">
            Make your choice.
          </Text>
        </View>
        <View flexDirection="column">
          {items?.map((value, i) => (
            <Checkboxes.FocusGroup.Item key={i} value={value.key}>
              <CheckboxItem
                isLastItem={i === items.length - 1}
                item={value}
                key={value.key}
                uniqueId={uniqueId}
              />
            </Checkboxes.FocusGroup.Item>
          ))}
        </View>
      </Checkboxes.FocusGroup>
    </Checkboxes>
  )
}

CheckboxList.fileName = 'CheckboxList'

function CheckboxItem({
  item,
  isLastItem,
  uniqueId,
}: {
  item: (typeof items)[number]
  isLastItem: boolean
  uniqueId: string
}) {
  const { desc, title, key } = item

  return (
    <Checkboxes.Card
      flexDirection="row"
      backgroundColor="transparent"
      paddingHorizontal="$4"
      borderRadius={0}
      cursor="pointer"
      gap="$4"
      paddingVertical="$3"
      borderWidth={0}
      alignItems="center"
      $group-window-xxs={{
        paddingHorizontal: '$3',
        gap: '$3',
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    >
      <Avatar
        circular
        size="$4"
        $group-window-xxs={{
          size: '$3',
        }}
      >
        <Avatar.Image src={item.avatar} />
        <Avatar.Fallback borderColor="$background" />
      </Avatar>
      <View flexDirection="column" flex={1}>
        <View flexDirection="row" alignItems="center" justifyContent="space-between">
          <Checkboxes.Checkbox.Label size="$4" lineHeight="$2" htmlFor={key + uniqueId}>
            {title}
          </Checkboxes.Checkbox.Label>
          <Checkboxes.Checkbox marginLeft="auto" id={key + uniqueId}>
            <Checkboxes.Checkbox.Indicator>
              <Check />
            </Checkboxes.Checkbox.Indicator>
          </Checkboxes.Checkbox>
        </View>
        <Text fontSize="$2" fontWeight="$2" lineHeight="$2" theme="alt1">
          {desc}
        </Text>
      </View>
    </Checkboxes.Card>
  )
}
