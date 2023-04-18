import {
  Box,
  Paper
} from "@mui/material";


export const ItemViewMoto = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 0,
          width: 2500,
          height: 100,
          position: 'relative'
        },
        width: 1400,
      }}
    >
      <Paper>
       
        {/* <Typography variant="h7" sx={{  alignContent: 'center', display: 'flex', justifyContent: 'center', position: 'relative'}}>
           hola
        </Typography> */}
      </Paper>
    </Box>
  );
};