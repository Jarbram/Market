
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProps = {
    children: JSX.Element
}

export enum ThemePalette {
        BG = "#12181b",
        LIME ="#c8fa5f",
        FONT_GLOBAL= " 'JetBrains Mono', monospace"
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { 
            default: ThemePalette.BG,
        },
        primary: {  
            main: ThemePalette.LIME, 
        },
    },
    typography: {
        fontFamily: ThemePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style:{
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
                }
            }
        },
    },            
});

export const ThemeConfig: React.FC<ThemeProps> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline  />
            {children}
        </ThemeProvider>
    )
};