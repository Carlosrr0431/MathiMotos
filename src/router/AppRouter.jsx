import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../Auth/Routes/AuthRoutes'
import { JournalRoutes } from '../Journal/Routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y registro */}
        <Route path='/auth/*' element={<AuthRoutes/>} />


        {/* JournalApp */}
        <Route path='/*' element={<JournalRoutes/>} />

    </Routes>
  )
}
