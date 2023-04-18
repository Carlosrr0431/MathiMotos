import {
  Grid
} from "@mui/material";
import { usePosts } from "../../context/PostContext";
import { useEffect } from "react";
import { CardTask } from "../Components/CardTask";

export const NothingSelectedView = () => {
  const { posts, setBoton, boton } = usePosts();

  useEffect(() => {
    setBoton(true);
  }, [])
  

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        {/* <StarOutlineOutlined sx = { { fontSize: 100, color: 'white' } }/> */}
      </Grid>

      <Grid item xs={4} container>
        {/* <Typography variant ='h5' color='white'>
                Crea o selecciona una nota
            </Typography> */}
        {
        posts.map((post) => {

          return (
            <CardTask post={post} key={post._id}/>
          )
        })
        }
      </Grid>
    </Grid>
  );
};
