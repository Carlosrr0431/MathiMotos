import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImagenGalery } from '../Components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx = { { mb: 1 } }>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'  > 28 de agosto, 2023 </Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={ { padding: 2} }>
                <SaveOutlined sx={ { fontSize: 30 , mr: 1} }/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type='text' 
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label= 'Titulo'
                sx= { { border: 'none', mb: 1 } }
                minRows={5}
            />

            <TextField 
                type='text' 
                variant='filled'
                fullWidth
                placeholder='¿Que sucedio en el dia de hoy?'
                multiline
                sx= { { border: 'none', mb: 1 } }
                minRows={5}
            />
        </Grid>

        <ImagenGalery/>
    </Grid>
  )
}
