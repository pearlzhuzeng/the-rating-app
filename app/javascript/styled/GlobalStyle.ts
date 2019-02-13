import { createGlobalStyle } from '../typed/styled-components'

export default createGlobalStyle`
html {
  @import url('https://fonts.googleapis.com/css?family=Lato');
  background-color: ${p => p.theme.primaryColor};
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  margin-top: 2em;
  max-width: 60em;
}
`
