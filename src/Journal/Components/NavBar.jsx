import { LogoutOutlined, MenuOutlined, Widgets } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { usePosts } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";

// { drawerWidth, handleDrawerOpen, open }
export const NavBar = () => {

  const {drawerWidth, handleDrawerOpen, open } = usePosts();
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${drawerWidth}px` },
        maxHeight: 100,
        minHeight: "-10vh",
        // backgroundColor: "#121212",
        // width:  {sm: `calc(100% - ${drawerWidth}px)`}
      }}
    >
      {/* marginTop: 3 es lo modificado  */}
      <Toolbar
        sx={{ position: "relative", height: 10, marginTop: -2, top: 2 }}
        variant="dense"
      >
        {/* <IconButton
          edge="start"
          color="secondary"
          // sx={ { mr: 2, display: { sm: 'none'  } } }
          onClick={handleDrawerOpen}
          sx={{ display: open ? "none" : "", top: 7 }}
        >
          <MenuOutlined />
        </IconButton> */}

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: 1000, position: "relative", top: 6 }}
        >
          <Typography
            variant="h2"
            noWrap
            component="div"
            color={grey[50]}
            sx={{ fontSize: 12, right: -450, position: "relative" }}
          >
            ENVIOS <b>SIN CARGO</b> &nbsp; &nbsp; | &nbsp; &nbsp; 3 CUOTAS SIN
            INTERES
          </Typography>

          <Typography
            variant="h2"
            noWrap
            component="div"
            color={grey[50]}
            sx={{ fontSize: 15, position: "relative", left: 550 }}
          >
            Locales
          </Typography>

          <Typography
            variant="h2"
            noWrap
            component="div"
            color={grey[50]}
            sx={{ fontSize: 15, position: "relative", left: 270 }}
          >
            Ayuda
          </Typography>

          <IconButton sx={{top: -1}}>
            <LogoutOutlined sx={{color: '#FF4F00'}} />
          </IconButton>
        </Grid>
      </Toolbar>

      {/* marginTop: 6,
          top: -25 lo modificado */}
      <Toolbar
        sx={{
          backgroundColor: "white",
          position: "fixed",
          width: "100%",
          left: 0,
          height: 10,
          marginTop: 4,
          top: -1,
        }}
        variant="dense"
      >
        <IconButton
          edge="start"
          color="primary"
          // sx={ { mr: 2, display: { sm: 'none'  } } }
          onClick={handleDrawerOpen}
          sx={{ display: open ? "none" : "", top: 0, left: -10 }}
        >
          <MenuOutlined />
        </IconButton>

        <IconButton
          sx={{ right: 575, marginLeft: 0, left: -5 }}
          onClick={() => navigate("/")}
        >
          {/* <Typography variant="h6" noWrap component="div">
              MathiMotos
            </Typography> */}
          <img
            src="/src/motosImg/MATHIMOTOS.svg"
            style={{
              width: "100%",
              // height: "100%",
              position: "relative",
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
