import { createTheme } from "@mui/material";
import {light, dark} from "./colorSchemes.js";

const schemeOptions = {
    'light': light,
    'dark': dark
}

export function theme(colorScheme) {
    return createTheme({
        palette:  schemeOptions[colorScheme]
    })
} 