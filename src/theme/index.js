// theme/index.js
import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import textStyles from './typography'
import breakpoints from './foundations/breakpoints'
import Container from './components/Container'
import { rgba } from 'polished'
// Global style overrides
// import styles from './styles'

// Foundational style overrides


const customTheme = extendTheme(
  {
    textStyles: textStyles,
    colors:defaultTheme.colors,
    components: {
      Container,
      Switch:{
        variants:{
          primary:{
            track:{
              background:"transparent",
              border:`1px solid ${rgba("#FA524A",0.25)}`,
              _checked:{
                background:"transparent",
                border:"1px solid rgba(0, 0, 0, 0.25)",
              },
              _focus:{
                outline:"none",
                boxShadow:"none"
              }
            },
            thumb:{
              background: "#FA524A",
              border: "1px solid rgba(0, 0, 0, 0.25)",
              _checked:{
                background: "#3A86FF",
              }
            },
            _focus:{
              outline:"none",
              boxShadow:"none"
            }
          }
        }
      }
    },
  },{
    config: defaultTheme.config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    zIndices: defaultTheme.zIndices,
    breakpoints: breakpoints,
    components: {},
    styles: {},
    borders: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  }
)

export default customTheme