import {
  Box,
  Paper,
} from "@mui/material";
import { CardTask } from "./CardTask";

export const ItemView = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 250,
          height: 250,
        },
      }}
    >
      <Paper>
        <CardTask post={item[0]} />
      </Paper>
      <Paper elevation={3}>
        <CardTask post={item[1]} />
      </Paper>
      <Paper elevation={3}>
        <CardTask post={item[2]} />
      </Paper>
      <Paper elevation={3}>
        <CardTask post={item[3]} />
      </Paper>
    </Box>
  );
};
