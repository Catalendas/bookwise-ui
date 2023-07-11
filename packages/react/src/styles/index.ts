import { colors, fonts, fontSize, fontWeight, lineHeight, radii, space } from "@bookwise-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { 
    styled, 
    css, 
    globalCss,
    keyframes, 
    getCssText, 
    theme, 
    createTheme, 
    config
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    
    theme: {
        colors: colors,
        fontSizes: fontSize,
        fontWeights: fontWeight,
        fonts: fonts,
        lineHeights: lineHeight,
        radii: radii,
        space: space,
    }
})