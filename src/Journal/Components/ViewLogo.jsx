import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const ViewLogo = ({item}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 0,
          width: '100%',
          height: 150,
        }
      }
    }
    >
      <Paper elevation={0} square sx={{left: 0, position: 'relative'}}>
        <img
          src={item.img}
          srcSet={item.img}
          loading="lazy"
          style={{width: '100%', height: '100%'}}
        />
      </Paper>
      

      
    </Box>
  );
};
