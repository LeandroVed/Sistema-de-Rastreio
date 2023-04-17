import React from 'react'
import { AppRoutes } from './routes'
import { ThemeProvider } from '@emotion/react'
import { LightTheme } from './shared/themes'
import { BrowserRouter } from 'react-router-dom'


export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
        <AppRoutes />
        </BrowserRouter>
    </ThemeProvider>
  )
}
