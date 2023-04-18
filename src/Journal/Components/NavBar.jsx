import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { grey } from "@mui/material/colors";


export const NavBar = ({drawerWidth, handleDrawerOpen, open}) => {

  return (
    <AppBar 
        position='fixed'
        sx={{
          
          ml: { sm: `${drawerWidth}px` },
          // backgroundColor: "#121212",
          // width:  {sm: `calc(100% - ${drawerWidth}px)`}
        }}
    >
      <Toolbar>
        <IconButton 
          edge = 'start'
          color='secondary'
          // sx={ { mr: 2, display: { sm: 'none'  } } }
          onClick={handleDrawerOpen}
          sx={{ display: open ? "none" : "" }}
        >
          <MenuOutlined/>
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h2' noWrap component='div' color={grey[50]} sx={{fontSize: 12}}>
              ENVIOS <b>SIN CARGO</b> &nbsp; &nbsp; | &nbsp; &nbsp; 3 CUOTAS SIN INTERES <br/> Oran - Salta
            </Typography>

            <Typography variant='h2' noWrap component='div' color={grey[50]} sx={{fontSize: 16, position: 'relative', left: 550}}>
              Locales
            </Typography>

            <Typography variant='h2' noWrap component='div' color={grey[50]} sx={{fontSize: 16, position: 'relative', left: 270}}>
              Ayuda
            </Typography>

            <IconButton color='error'>
              <LogoutOutlined/>
            </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}


