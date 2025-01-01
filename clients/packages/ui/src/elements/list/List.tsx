import { randAvatar, randFullName, randUuid } from '@ngneat/falso'
import { Phone } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import type { ColorTokens } from 'tamagui'
import { Avatar, Button, Circle, Separator, Text, View, YGroup } from 'tamagui'

// Define more descriptive status options
const statusOptions = [
  {
    status: 'Available',
    color: 'green',
  },
  {
    status: 'Offline',
    color: 'gray',
  },
  {
    status: 'In a Meeting',
    color: 'orange',
  },
  {
    status: 'On Vacation',
    color: 'pink',
  },
  {
    status: 'Do Not Disturb',
    color: 'red',
  },
  {
    status: 'Working Remotely',
    color: 'purple',
  },
  {
    status: 'Out for Lunch',
    color: 'blue',
  },
  {
    status: 'Away from Desk',
    color: 'gray',
  },
  {
    status: 'On a Call',
    color: 'blue',
  },
  {
    status: 'Taking a Break',
    color: 'yellow',
  },
]

// Function to generate a person with a random descriptive status
const getPersonList = () => {
  const personsList = Array.from({ length: 10 }, () => ({
    id: randUuid(),
    name: randFullName(),
    status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    image: `${randAvatar()}?id=${randUuid()}`,
  }))
  return personsList
}

type PersonList = ReturnType<typeof getPersonList>

export function List() {
  const [personsList, setPersonsList] = useState<PersonList>([])

  useEffect(() => {
    setPersonsList(getPersonList())
  }, [])
  return (
    <YGroup
      width="100%"
      justifyContent="center"
      alignItems="center"
      $group-window-sm={{
        paddingHorizontal: '$4',
        paddingVertical: '$6',
      }}
    >
      <View
        $group-window-gtXs={{
          padding: '$3',
          width: 600,
        }}
        gap="$1.5"
        minWidth="100%"
      >
        {personsList.map((person, i) => (
          <View key={person.id}>
            <Item person={person} />
            {i < personsList.length - 1 && <Separator />}
          </View>
        ))}
      </View>
    </YGroup>
  )
}

List.fileName = 'List'

function Item({ person }: { person: PersonList[number] }) {
  return (
    <YGroup.Item>
      <View
        flexDirection="row"
        paddingVertical="$2"
        gap="$2"
        $group-window-gtXs={{
          padding: '$4',
          gap: '$4',
        }}
        backgroundColor="$color1"
        alignItems="center"
      >
        <View>
          <Avatar circular size="$4">
            <Avatar.Image objectFit="cover" src={person.image} />
            <Avatar.Fallback backgroundColor="$background" />
          </Avatar>
          <Circle
            borderWidth={1}
            borderColor="$borderColor"
            right="3%"
            bottom="3%"
            zIndex={1}
            size={12}
            position="absolute"
            backgroundColor={`$${person.status.color}10` as ColorTokens}
          />
        </View>
        <View flexDirection="column" flexShrink={1} justifyContent="center">
          <Text selectable>{person.name}</Text>
          <Text selectable fontSize="$2" lineHeight="$2" fontWeight="$2" theme="alt1">
            {person.status.status}
          </Text>
        </View>
        <Button marginLeft="auto" circular size="$4" scaleIcon={1.5}>
          <Button.Icon>
            <Phone color="$green10" />
          </Button.Icon>
        </Button>
      </View>
    </YGroup.Item>
  )
}
