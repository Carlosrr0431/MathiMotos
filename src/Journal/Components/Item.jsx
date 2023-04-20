import { Box } from "@mui/material";

export const Item = ({ item }) => {
  return (
    <Box
      src={item.img}
      component="img"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 0,
          width: '100%',
          // height: 120,
          // position: 'relative',
        },
        width: '100%',
        height: 500, 
        // right: 1000,
      }}
    >
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>{item.title}</h2>
      </div> */}

      {/* <img
        src={item.img}
        // style={{ width: "100%", height: "70vh", position: 'relative', justifyContent: 'inherit', paddingLeft: 0,
        // paddingRight: 0 }}
      /> */}
    </Box>
  );
};
