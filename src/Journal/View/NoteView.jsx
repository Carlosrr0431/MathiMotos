import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImagenGalery } from '../Components'
import { useForm } from '../../hooks/useForm'
import { usePosts } from '../../context/PostContext'

export const NoteView = () => {

    const {createPosts, setBoton} = usePosts();

    const {form, onInputChange} = useForm({
        title: '',
        description: ''
    });

    const {title, description} = form;

    const handledSubmit = async(e) => {
        e.preventDefault();

        await createPosts(form);

        setBoton(true);

        console.log(form);
    }


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

        <Grid component='form' onSubmit={handledSubmit} container>
            <TextField 
                type='text' 
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label= 'Titulo'
                sx= { { border: 'none', mb: 1 } }
                minRows={5}
                name='title'
                value={title}
                onChange={onInputChange}
                
            />

            <TextField 
                type='text' 
                variant='filled'
                fullWidth
                placeholder='Descripcion'
                label='Descripcion'
                multiline
                sx= { { border: 'none', mb: 1 } }
                rows={3}
                name='description'
                value={description}
                onChange={onInputChange}
            />

            <Button type='submit' variant='outlined'> Guardar </Button>
        </Grid>

        <ImagenGalery/>
    </Grid>
  )
}
