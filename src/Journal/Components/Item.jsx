import { Paper } from "@mui/material";

export const Item = ({ item }) => {
  return (
    <Paper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>{item.title}</h2>
      </div>

      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        style={{ width: "100%", height: "45vh" }}
      />
    </Paper>
  );
};
