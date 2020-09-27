import tinycolor from 'tinycolor2'

export const MAIN_COLOR = '#001732'
export const SECONDARY_COLOR = '#7971E9'
export const LIGHT_BACKGROUND_COLOR = '#293942'
export const DARK_BACKGROUND_COLOR = '#1B262C'

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
