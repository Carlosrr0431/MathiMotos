import { NavBar, SideBar } from "../Components";
import { Box, Toolbar, Grid } from "@mui/material";

import { useState } from "react";
import { usePosts } from "../../context/PostContext";

export const JournalLayout = ({ children }) => {
  // const [open, setOpen] = useState(true);
  // const [drawerWidth, setDrawerWidth] = useState(240);

  const {
    setDrawerWidth,
    open,
    drawerWidth,
    handleDrawerOpen,
    handleDrawerClose,
  } = usePosts();

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  //   setDrawerWidth(240);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  //   setDrawerWidth(0);

  // };

  return (
    <Grid sx={{ display: "flex" }}>
      {/* drawerWidth={drawerWidth} handleDrawerOpen = {handleDrawerOpen} open = {open}  */}
      <NavBar />

      {/* drawerWidth={drawerWidth} setDrawerWidth = {setDrawerWidth} open = {open} handleDrawerOpen = {handleDrawerOpen} handleDrawerClose={handleDrawerClose} */}
      <SideBar />

      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
        {children}
      </Box>
    </Grid>
    // <Box sx={{ display: "flex" }}>
    //   <CssBaseline />
    //   <AppBar position="fixed" open={open}>
    //     <Toolbar>
    //       <IconButton
    //         color="inherit"
    //         aria-label="open drawer"
    //         onClick={handleDrawerOpen}
    //         edge="start"
    //         sx={{ mr: 2, ...(open && { display: "none" }) }}
    //       >
    //         <MenuOutlined />
    //       </IconButton>
    //
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       "& .MuiDrawer-paper": {
    //         width: drawerWidth,
    //         boxSizing: "border-box",
    //       },
    //     }}
    //     variant="persistent"
    //     anchor="left"
    //     open={open}
    //   >
    //     <Toolbar>
    //       <IconButton onClick={handleDrawerClose}>
    //         <MenuOutlined />
    //       </IconButton>
    //     </Toolbar>

    //     <List>
    //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Drawer>

    //   <Box >
    //         {children}
    //   </Box>

    // </Box>
  );
};
