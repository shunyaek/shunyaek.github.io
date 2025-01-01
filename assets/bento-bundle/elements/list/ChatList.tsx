import { randRecentDate, randSentence } from '@ngneat/falso'
import { Check } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { AnimatePresence, Avatar, Button, Text, Theme, View, styled } from 'tamagui'

const List = styled(FlatList<Message>, {
  backgroundColor: '$background',
  gap: '$3',
})

const avatars = ['/avatars/300 (2).jpeg', '/avatars/300 (4).jpeg']

const getMessages = () =>
  Array.from({ length: 50 })
    .fill(0)
    .map((_, i) => ({
      message: randSentence(),
      time: randRecentDate().toLocaleTimeString(),
      itsMe: i % 2 === 0,
      avatar: avatars[i % 2],
    }))

type Message = ReturnType<typeof getMessages>[0]

const renderItem = ({
  item: message,
  index,
}: {
  item: Message
  index: number
}) => {
  return <ChatItem index={index + 1} key={message.time} item={message} />
}

export function ChatList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setMessages(getMessages())
  }, [])

  return (
    <View
      flexDirection="column"
      height={700}
      minWidth="100%"
      $group-window-sm={{
        paddingHorizontal: '$4',
      }}
    >
      <List
        $group-window-gtXs={{
          padding: '$8',
        }}
        inverted
        data={messages}
        renderItem={renderItem}
        windowSize={2}
      />
    </View>
  )
}

ChatList.fileName = 'ChatList'

function ChatItem({ item, index }: { item: Message; index: number }) {
  const { message, time, avatar, itsMe } = item
  const [showMessage, setShowMessage] = useState(false)
  const showDelay = index * 300
  const [start, setStart] = useState(false)

  useEffect(() => {
    // run animations after initial render calms down
    ;(globalThis.requestIdleCallback || setTimeout)(() => {
      setStart(true)
    })
  }, [])

  useEffect(() => {
    if (!start) return
    const timeout = setTimeout(() => {
      setShowMessage((prev) => !prev)
    }, showDelay)
    return () => clearTimeout(timeout)
  }, [start, showDelay])

  return (
    <AnimatePresence>
      {showMessage && (
        <View
          flexDirection={itsMe ? 'row-reverse' : 'row'}
          alignItems="flex-start"
          gap="$4"
          alignSelf={itsMe ? 'flex-end' : 'flex-start'}
          maxWidth="100%"
          minWidth="100%"
        >
          <Button
            animation="quick"
            enterStyle={{
              opacity: 0,
              scale: 0,
            }}
            size="$5"
            circular
            chromeless
          >
            <View flexDirection="row">
              <Avatar circular size="$5">
                <Avatar.Image resizeMode="cover" source={{ uri: avatar }} />
                <Avatar.Fallback backgroundColor="$background" />
              </Avatar>
            </View>
          </Button>
          <View
            flexDirection="column"
            alignItems={itsMe ? 'flex-end' : 'flex-start'}
            gap="$2"
            maxWidth={400}
            justifyContent="center"
            flexShrink={1}
          >
            <Theme name={itsMe ? 'green' : 'gray'}>
              <View
                backgroundColor="$color2"
                padding="$4"
                paddingVertical="$3"
                borderRadius="$6"
                flexShrink={1}
              >
                <Text
                  fontSize="$3"
                  fontWeight="$3"
                  lineHeight="$3"
                  flexShrink={1}
                  userSelect="text"
                >
                  {message}
                </Text>
              </View>
            </Theme>
            <View flexDirection={itsMe ? 'row' : 'row-reverse'} gap="$2">
              <Text color="$color7" fontSize="$3" fontWeight="$3" lineHeight="$3">
                {time}
              </Text>
              <Check size={16} color="green" />
            </View>
          </View>
        </View>
      )}
    </AnimatePresence>
  )
}
