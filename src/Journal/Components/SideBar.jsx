import { TurnedInNot } from '@mui/icons-material'
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'
import { grey, orange } from '@mui/material/colors'
import React from 'react'

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
      lineHeight={0}
      component='nav'
      sx = { { width: { sm: drawerWidth }, flexShrink: { sm: 0 }, border: 'none'} }
    
    >
      <Drawer
      
        variant='permanent'
        open
        
        sx = { { display: { xs: 'block' },
              '& .MuiDrawer-paper': { boxSizing:'border-box', width: drawerWidth, backgroundColor: orange[300] }
        } }
      >

        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Carlos RR
          </Typography>
        </Toolbar>
        {/* <Divider/> */}

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( (text) => (
              <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot/>
                    </ListItemIcon>

                    <Grid container>
                      <ListItemText primary = { text }/>
                      <ListItemText secondary = {'Curso de React a Full'}/>
                    </Grid>
                  </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Box>
  )
}
