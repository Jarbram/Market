import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProps = {
    children: JSX.Element
}

const theme = createTheme({

});

export const ThemeConfig: React.FC<ThemeProps> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};