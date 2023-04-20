import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Grid,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../context/PostContext";

// { drawerWidth = 240, open, handleDrawerClose }
export const SideBar = () => {
  const navigate = useNavigate();
  const { drawerWidth, open, handleDrawerClose } = usePosts();
  return (
    <Box
      lineHeight={0}
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        border: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "white",
            margin: 0,
            padding: 0,
            border: "none",
            top: 75,
          },
        }}
      >
        {/* <Divider/> */}
        <Toolbar sx={{ marginBottom: -3 }}>
          {/* <IconButton color="inherit" onClick={() => navigate('/')}>
            <img src="/src/motosImg/MATHIMOTOS.svg" style={ {width: '100%', height: '100%', position: 'relative', left: -10}}/>
          </IconButton> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ display: open ? "" : "none" }}
          >
            <KeyboardReturnIcon sx={{ position: "relative", left: 180 }} />
          </IconButton>
        </Toolbar>

        <List>
          {["Motos", "Repuestos", "Indumentaria"].map((text) => (
            <ListItem disablePadding key={text}>
              <ListItemButton>
                <Grid container>
                  <Accordion
                    sx={{
                      backgroundColor: "white",
                      border: "none",
                      boxShadow: "none",
                      borderBottom: "solid 1px grey",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreOutlined />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ backgroundColor: "white", border: "none" }}
                    >
                      <Typography>{text}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button
                        sx={{
                          width: "100%",
                          justifyContent: "left",
                          right: 15,
                        }}
                        variant="primary"
                        onClick={() => navigate("/motos/jamaha")}
                      >
                        {" "}
                        Jamaha{" "}
                      </Button>
                      <Button
                        sx={{
                          width: "100%",
                          justifyContent: "left",
                          right: 15,
                        }}
                        variant="primary"
                      >
                        {" "}
                        Gilera{" "}
                      </Button>
                      <Button
                        sx={{
                          width: "100%",
                          justifyContent: "left",
                          right: 15,
                        }}
                        variant="primary"
                      >
                        {" "}
                        Motomel{" "}
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
