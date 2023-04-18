import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            // main: '#262254',
            main: '#121212'
            // main: '#f7bd56'
            
            
        },

        secondary: {
            main: '#fafafa'
        },
        error: {
            main: red.A400
        }
    }
});

