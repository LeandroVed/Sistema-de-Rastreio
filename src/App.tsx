import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider, DrawerProvider } from './shared/contexts'
import SideBar from './shared/components/sideBar/SideBar'
import { TextField } from './shared/components/TextField/TextField'


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
            <SideBar>
              <AppRoutes />
              <TextField 
              label={'CPF'} 
              placeholder='Digite seu CPF'
              inputMode='numeric'
              />
            </SideBar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

