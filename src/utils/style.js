import tinycolor from 'tinycolor2'


export const mediaMax = ({ max, style }) => `
  @media handheld, only screen and (max-width: ${max}px), only screen and (max-device-width: ${max}px) {
    ${style}
  }
`

export const mediaMin = ({ min, style }) => `
  @media only screen and (min-width: ${min}px) {
    ${style}
  }
`

export const mediaMinMax = ({ min, max, style }) => `
  @media only screen and (min-width: ${min}px) and (max-width: ${max}px) {
    ${style}
  }
`

export const MAIN_COLOR = '#001732'
export const SECONDARY_COLOR = '#7971E9'
export const LIGHT_BACKGROUND_COLOR = '#293942'
export const DARK_BACKGROUND_COLOR = '#1B262C'

export const GRID_BREAKPOINT_MOBILE = 0
export const GRID_BREAKPOINT_PHABLET = 650
export const GRID_BREAKPOINT_TABLET = 960
export const GRID_BREAKPOINT_DESKTOP = 1280
export const GRID_BREAKPOINT_LARGE_DESKTOP = 1920

export const GRID_BREAKPOINTS = [
  GRID_BREAKPOINT_PHABLET,
  GRID_BREAKPOINT_TABLET,
  GRID_BREAKPOINT_DESKTOP,
  GRID_BREAKPOINT_LARGE_DESKTOP
]

export const CONTAINER_BREAKPOINTS = [
  GRID_BREAKPOINT_TABLET - 30,
  GRID_BREAKPOINT_DESKTOP - 30,
  GRID_BREAKPOINT_LARGE_DESKTOP - 30
]

export const mediaMobile = style => mediaMax({ max: GRID_BREAKPOINT_PHABLET, style })
export const mediaPhablet = style =>
  mediaMinMax({ min: GRID_BREAKPOINT_PHABLET + 1, max: GRID_BREAKPOINT_TABLET, style })
export const mediaTablet = style =>
  mediaMinMax({ min: GRID_BREAKPOINT_TABLET + 1, max: GRID_BREAKPOINT_DESKTOP, style })

export const styledButton = `
  border-radius: 2px;
  font-size: 12px;
  padding: 13px 25px;
  text-decoration: none;
  transition: none;
`

export const styledColoredBackgroundButton = color => `
  color: white;
  background-color: ${color};

  &:hover {
    background-color: ${tinycolor(color).darken().toString()};
  }
`

export const styledColoredButton = color => `
  background-color: white;
  color: ${color};
  border: 1px solid ${color};

  &:hover {
    color: white;
    background-color: ${color};
  }
`

export const styledPurpleButton = styledColoredButton(SECONDARY_COLOR)
export const styledPurpleBackgroundButton = styledColoredBackgroundButton(SECONDARY_COLOR)

