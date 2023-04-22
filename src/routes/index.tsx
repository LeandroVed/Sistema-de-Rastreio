import React from 'react'
import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UseAppThemeContext } from '../shared/contexts/ThemeContext'

export const AppRoutes = () => {
    const { toggleTheme } = UseAppThemeContext()

    return (
        <Routes>
            <Route path="/home" element={ <Button variant='contained' color='primary' onClick={ toggleTheme }>  Toggle Theme </Button>} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}