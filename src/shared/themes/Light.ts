import { createTheme } from "@mui/material"
import { blue, yellow } from "@mui/material/colors"

export const LightTheme = createTheme({
    palette: { 
        primary: {
            main: blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: '#ffffff'
        },
        secondary: {
            main: yellow[500],
            dark: yellow[400],
            light: yellow[300],
            contrastText: '#ffffff'
        },
        background: {
            default: "#f7f6f3",
            paper: '#ffffff'
        }
     }
})