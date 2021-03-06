import '@fontsource/roboto'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles } from 'twin.macro'

const BaseStyles = createGlobalStyle`
  ${tw`antialiased dark:bg-gray-800 dark:text-gray-50`};
  body {
    ${tw`text-lg font-sans`}
  }
`

const MainStyles = ({ children }) => (
  <>
    <GlobalStyles />
    <BaseStyles />
    {children}
  </>
)

export default MainStyles
