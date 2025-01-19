import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#28262c',
            contrastText: '#f2f0ef'
        },
        secondary: {
            main: '#668f80',
            contrastText: '#28262c'
        },
        error: {
            main: '#d6a2ad',
            contrastText: '#28262c'
        },
        warning: {
            main: '#c3b59f',
            contrastText: '#28262c'
        },
        success: {
            main: '#a0af84',
            contrastText: '#28262c'
        },
        info: {
            main: '#74999d',
            contrastText: '#28262c'
        }
    }
})