import { useId, useState } from 'react'
import { Avatar, H2, Label, RadioGroup, Text, View } from 'tamagui'
import { Card } from './components/radioParts'

const items = [
  { id: 'ver-1-paypal', label: 'PayPal', icon: 'paypal' },
  { id: 'ver-1-mastercard', label: 'Mastercard', icon: 'mastercard' },
  { id: 'ver-1-visa', label: 'Visa', icon: 'visa' },
]

/** ------ EXAMPLE ------ */
export function Horizontal() {
  const uniqueId = useId()
  const [value, setValue] = useState('hor-visa')
  return (
    <View
      flexDirection="column"
      width="100%"
      maxWidth={600}
      gap="$4"
      $group-window-sm={{
        paddingHorizontal: '$4',
        paddingVertical: '$6',
      }}
    >
      <View flexDirection="column">
        <H2>Payment</H2>
        <Text fos="$4" lh="$4" fontWeight="300" color="$gray10">
          Select your payment method
        </Text>
      </View>
      <RadioGroup
        flexWrap="wrap"
        gap="$4"
        rowGap="$2"
        flexDirection="row"
        value={value}
        onValueChange={setValue}
      >
        {items.map(({ id, label, icon }) => (
          <Card
            key={label}
            flexDirection="row"
            flex={1}
            flexBasis={150}
            alignItems="center"
            gap="$3"
            padding={0}
            minWidth="100%"
            active={value === label}
            paddingHorizontal="$2.5"
            cursor="pointer"
            onPress={() => setValue(label)}
            $group-window-gtXs={{
              minWidth: 'auto',
            }}
          >
            <View onPress={(e) => e.stopPropagation()}>
              <RadioGroup.Item id={uniqueId + label} value={label}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </View>

            <View flexDirection="row" alignItems="center" gap="$2">
              <Avatar size="$1.5" br={5}>
                <Avatar.Image
                  accessibilityLabel="Payment method icon"
                  src={`/bento/payment_logos/${icon}.svg`}
                />
                <Avatar.Fallback backgroundColor="$gray6" />
              </Avatar>

              <Label cursor="pointer" htmlFor={uniqueId + label}>
                {label}
              </Label>
            </View>
          </Card>
        ))}
      </RadioGroup>
    </View>
  )
}

Horizontal.fileName = 'Horizontal'
