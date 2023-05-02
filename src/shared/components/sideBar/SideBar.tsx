import React, { ReactNode } from 'react'
import { 
  Avatar,
  Box,
  Divider, 
  Drawer,
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  useMediaQuery, 
  useTheme } 
from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import SendIcon from '@mui/icons-material/Send'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import { UseDrawerContext } from '../../contexts'
import { deepPurple } from '@mui/material/colors'

interface ISideBarProps {
  children: ReactNode
}

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { isDrawerOpen, toggleDrawerOpen } = UseDrawerContext()

    return(
     <>
        <Drawer 
          open={isDrawerOpen} 
          variant={smDown ? 'temporary' : 'permanent'} 
          onClose={toggleDrawerOpen}
        >
          <Box 
            width={theme.spacing(28)} 
            height="100%"
            display="flex" 
            flexDirection="column"
          >  
            <Box
              width='100%'
              height={theme.spacing(20)} 
              display='flex' 
              justifyContent='center'
            >
                <Avatar
                  sx={
                        {
                          height: theme.spacing(10), 
                          width: theme.spacing(10), 
                          bgColor: deepPurple[500]
                        }
                      }
                      > L   
                </Avatar>
            </Box>
            <Divider />
            <Box flex={1} component="nav">
            <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Procurar"/>
                </ListItemButton>
                <Divider />
                <List component="nav"/>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <AddLocationIcon />
                    </ListItemIcon>
                    <ListItemText primary="Endereços"/>
                </ListItemButton>
                <Divider />
                <List component="nav"/>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Enviar"/>                  
                </ListItemButton>
                <Divider />
                <List component="nav"/>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimento"/>                  
                </ListItemButton>
                <Divider />
                <List component="nav"/>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <ShoppingBagIcon />
                    </ListItemIcon>
                    <ListItemText primary="Comprar"/>                  
                </ListItemButton>
                <Divider />
                <List component="nav"/>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="Entrar/Sair"/>                  
                </ListItemButton>
                <Divider />
            </Box>  
          </Box>
        </Drawer>
        <Box 
          height="100vh" 
          marginLeft={smDown ? 0 : theme.spacing(28)}
        >
          { children }
        </Box>
     </>
    )
}

export default SideBar