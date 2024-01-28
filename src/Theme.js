import { createTheme } from "@mui/material";

export const theme = createTheme(
    {
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                background: '#fff',               
                boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',               
              },
            },
          },
        },
        typography: {
          fontFamily: '"nunito" sans-serif', // Replace with your font
        }
        
      }
);