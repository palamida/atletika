import Typography from "typography"
// import { EventEmitter } from "events"
// import fairyGateTheme from "typography-theme-fairy-gates"

// const typography = new Typography(fairyGateTheme)

const typography = new Typography({
  title: "Gatsby site",
  baseFontSize: '18px',
  baseLineHeight: 1.60,
  blockMarginBottom: 0.8,
  googleFonts: [
    {
      name: "Catamaran",
      styles: ["400,700"],
    },
  ],
  headerFontFamily: ['Catamaran', 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Catamaran', 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  headerColor: "hsla(0,0%,0%,0.5)",
  bodyColor: "hsla(0,0%,0%,0.87)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  scaleRatio: 2.40,
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: "rgb(60,30,20)",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      color: "#000",
    },
    blockquote: {
      ...scale(1 / 5),
      background: "#eee",
      color: "#888",
      paddingLeft: rhythm(14 / 16),
      paddingRight: rhythm(1 / 2),
      paddingTop: rhythm(1 / 2),
      paddingBottom: rhythm(1 / 2),
      marginLeft: 0,
      marginRight: 0,
      borderLeft: `${rhythm(2 / 16)} solid #666`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(0.5),
    },
    h6: {
      fontStyle: "italic",
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography