import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../Layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../View'
// import { NoteView, NothingSelectedView } from '../View'

export const JournalPage = () => {
  return (

    <JournalLayout>

      <NothingSelectedView/>
     {/* <NoteView/> */}

      <IconButton 
        size='large'
        sx={ { 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'green', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        } }
      >

        <AddOutlined sx={ { fontSize: 30 } }/>

      </IconButton>
    </JournalLayout>
  )
}
