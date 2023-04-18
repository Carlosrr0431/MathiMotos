import { ImageList, ImageListItem} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const ViewLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 5,
          width: 1000,
          height: 150,
        },
      }}
    >
      <Paper elevation={10} square>

        <ImageList sx={{ width: 1740, height: 135, display: 'flex'}} cols={1} rowHeight={0}>
          <ImageListItem sx={{ margin: 'auto', display: 'block', right: 500, position: 'relative', bottom: 200}}>
            <img
              src={`src/motosImg/mati.jpg`}
              srcSet={`src/motosImg/mati.jpg`}
              loading="lazy"
              style={{margin: 'auto', display: 'block'}}
              
            />
          </ImageListItem>
        </ImageList>
        
      </Paper>
    </Box>
  );
};