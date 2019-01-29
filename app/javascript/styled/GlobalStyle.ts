import { createGlobalStyle } from '../typed/styled-components'

export default createGlobalStyle`
html {
  background-color: ${p => p.theme.primaryColor}
}
`
