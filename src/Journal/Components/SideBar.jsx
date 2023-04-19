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
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ drawerWidth = 240, open, handleDrawerClose }) => {
  const navigate = useNavigate();

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
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "white",
            margin: 0,
            padding: 0,
            border: "none",
            top: 64,
          },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate('/')}>
            {/* <Typography variant="h6" noWrap component="div">
              MathiMotos
            </Typography> */}
            <img src="src/motosImg/MATHIMOTOS.png" style={ {width: 100}}/>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ display: open ? "" : "none" }}
          >
            <KeyboardReturnIcon sx={{ position: "relative", left: 60 }} />
          </IconButton>
        </Toolbar>

        <List>
          {["Motos", "Repuestos", "Indumentaria"].map((text) => (
            <ListItem disablePadding sx={{}} key={text}>
              <ListItemButton>
                <Grid container>
                  <Accordion style={{ backgroundColor: "#706C6C" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreOutlined />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{text}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button
                        variant="primary"
                        onClick={() => navigate("/motos/jamaha")}
                      >
                        {" "}
                        Yamaha{" "}
                      </Button>
                      <Button variant="primary"> Gilera </Button>
                      <Button variant="primary"> Motomel </Button>
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
