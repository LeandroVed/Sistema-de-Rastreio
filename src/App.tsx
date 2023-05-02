import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider, DrawerProvider } from './shared/contexts'
import SideBar from './shared/components/sideBar/SideBar'

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
            <SideBar>
              <AppRoutes />
            </SideBar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

