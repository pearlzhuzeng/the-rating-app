export interface ThemeInterface {
  primaryColor: string
  primaryColorInverted: string
}

const themes: { [themeName: string]: ThemeInterface } = {
  default: {
    primaryColor: 'papayawhip',
    primaryColorInverted: 'rebeccapurple',
  },
}

export default themes
