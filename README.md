# shunyaek.github.io

This is the GitHub Pages repo for our official website at:

- https://shunyaek.se
- https://shunyaek.github.io

## Contributing

If you find bugs, please file an issue.

## Technology Stack

### Client-side

- JavaScript & TypeScript
- HTML & JSX
- CSS
- TamaGUI
- ReactJS & NextJS
- React Native & Expo

### Server-side

- Python

## Directory Structure

- `clients`: Client-side code
  - `packages`: shared packages across apps ([Bootstrapping](https://tamagui.dev/docs/guides/create-tamagui-app))
    - `app`: you'll be importing most files from `app/`
      - `features`: don't use a `screens` folder, organize by feature
      - `provider`: all the providers that wrap the app, and some no-ops for Web
      - `navigation`: only for starter-free template, contains the navigation code for React Native
    - You can add other folders inside of packages/ if you know what you're doing and have a good reason to.
- `servers`: Server-side code

## tamagui / ui

Apart from the notes below, it's recommended to read the [official `tamagui/ui` documentation](https://tamagui.dev/ui/intro). Additional links to different, relevant sections of the documentation are provided below.

- [Stacks](https://tamagui.dev/ui/stacks?subpath=stacks): An optional base for creating flex-based layouts.

  - **Features**:
    - X, Y, and Z stacks for easy flex layouts.
    - Gap property to add space between elements.
    - Handle press, focus, and layout events easily.
  - Tamagui UI includes optional stack views - `XStack`, `YStack` and `ZStack`. They extend directly off the `View` from `@tamagui/core`.
    - `XStack` is a horizontal stack.
    - `YStack` is a vertical stack.
    - `ZStack` is a stack that can be used to overlay elements.

- [Headings](https://tamagui.dev/ui/headings?subpath=headings): Heading components that mimic HTML equivalents.

  - **Features**:
    - Accepts size prop that works on all styles.
    - Define custom fonts with styles per-size.
  - Tamagui UI includes heading components - `H1`, `H2`, `H3`, `H4`, `H5`, `H6`.

- [Text](https://tamagui.dev/ui/text?subpath=text): Text primitives with themes custom to each font.

  - **Features**:
    - Themes that give you control over spacing, weights, and sizes custom to each font.
    - Size prop that automatically matches all theme values.
    - Media query styles, `hoverStyle`, `pressStyle`, `focusStyle`.
  - Tamagui UI includes text components - `Text`, `Paragraph`, `SizableText`.
  - **Note**: _`Paragraph` renders to a `p` tag on web, which can cause issues when you nest them during SSR. If you don't mind rendering to a span, use `SizableText`, otherwise, be careful when nesting items inside a `Paragraph`._
