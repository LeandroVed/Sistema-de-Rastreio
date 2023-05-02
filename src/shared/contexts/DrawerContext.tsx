import React from 'react'
import {
    ReactNode, 
    createContext,
    useCallback, 
    useContext, 
    useState 
} from "react"

interface IDrawerContextData {
    isDrawerOpen: boolean,
    toggleDrawerOpen: () => void
}

interface IThemeProviderProps {
    children: ReactNode
}

const DrawerContext = createContext ({ } as IDrawerContextData)

export const UseDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            { children }
        </DrawerContext.Provider>
    )
}