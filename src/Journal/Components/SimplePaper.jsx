import { ImageList, ImageListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const SimplePaper = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 5,
          width: 450,
          height: 100,
        },
      }}
    >
      <Paper elevation={1} square>
        <ImageList sx={{ width: "50%", height: 100 }} cols={4} rowHeight={0}>
          <ImageListItem sx={{ right: -50, bottom: -5 }}>
            <img
              src={`src/motosImg/visa.png`}
              srcSet={`src/motosImg/visa.png`}
              loading="lazy"
            />
          </ImageListItem>

          <ImageListItem sx={{ right: -50, bottom: -12 }}>
            <img
              src={`src/motosImg/mc_symbol_opt_73_3x.png`}
              srcSet={`src/motosImg/mc_symbol_opt_73_3x.png`}
              loading="lazy"
            />
          </ImageListItem>

          <ImageListItem sx={{ right: -50, bottom: -5 }}>
            <img
              src={`src/motosImg/american-express.png`}
              srcSet={`src/motosImg/american-express.png`}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>

        <Typography
          variant="h7"
          sx={{ bottom: 110, left: -10, alignContent: 'center', display: 'flex', justifyContent: 'end', position: 'relative'}}
        >
          Hasta 12 cuotas sin interes
          <br />
          con amex | visa | american
        </Typography>
        
      </Paper>

      <Paper elevation={1}></Paper>
    </Box>
  );
};
