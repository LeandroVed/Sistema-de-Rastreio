import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts/ThemeContext'


export const App = () => {
  return (
    <AppThemeProvider>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </AppThemeProvider>
  )
}

