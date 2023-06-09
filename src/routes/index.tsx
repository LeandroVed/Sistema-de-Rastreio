import React from 'react'
import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UseDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {
    const { toggleDrawerOpen } = UseDrawerContext()

    return (
        <Routes>
            <Route 
                path="/home" 
                element={ 
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={ toggleDrawerOpen }
                    >  
                        Toggle Drawer 
                    </Button>} />
            <Route 
                path="*" 
                element={<
                        Navigate to="/home" 
                        />} 
                />
        </Routes>
    )
}