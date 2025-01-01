import { Baby } from '@tamagui/lucide-icons'
import { useId, useState } from 'react'
import { Button, Label, Switch, Text, View } from 'tamagui'
import { usePhoneScale } from '../../general/_Showcase'

/** ------ EXAMPLE ------ */
export function IconTitleSwitch() {
  const uniqueId = useId()
  const [checked, setChecked] = useState(true)

  // Note: you need don't need to use this in your code, it's only for the showcase
  const { scale, invertScale } = usePhoneScale()
  const finalScale = scale === 1 ? 1 : invertScale

  return (
    <Button
      flexDirection="row"
      maxWidth="100%"
      borderColor="$borderColor"
      borderWidth={1}
      paddingHorizontal="$4"
      paddingVertical="$3"
      $group-window-sm={{ marginTop: '$6', marginHorizontal: '$5' }}
      borderRadius="$3"
      width={400}
      height="auto"
      alignItems="center"
      gap="$2.5"
      theme="surface1"
      animation="medium"
      onPress={() => setChecked(!checked)}
    >
      <Baby size="$2" color="$color11" />
      <View flexDirection="column">
        <Label size="$1.5" htmlFor={uniqueId + 'switch'}>
          Title here
        </Label>
        <Text theme="alt1" fontSize="$1" fontWeight="$1" lineHeight="$1">
          Your description here
        </Text>
      </View>
      <Switch
        id={uniqueId + 'switch'}
        checked={checked}
        onCheckedChange={setChecked}
        marginLeft="auto"
        // Note: replace the following code with "$2" only
        size={finalScale !== 1 ? '$1' : '$2'}
        scale={finalScale}
      >
        <Switch.Thumb borderColor="$color1" animation="200ms" />
      </Switch>
    </Button>
  )
}

IconTitleSwitch.fileName = 'IconTitleSwitch'
