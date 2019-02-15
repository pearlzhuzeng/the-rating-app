import { createGlobalStyle } from '../typed/styled-components'

export default createGlobalStyle`
html {
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @import url('https://fonts.googleapis.com/css?family=Merriweather')
  background-color: ${p => p.theme.primaryColor};
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  margin-top: 2em;
  max-width: 60em;
}

a {
  color: #136d88
}

button {
  background-color: #fffffe;
  color: #555;
  border-radius: 0.3em;

  &:hover {
    background-color: #136d88;
    color: white;
    transition: all 0.1s;
  }
}
`
