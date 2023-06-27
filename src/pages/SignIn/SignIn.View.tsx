import React from 'react'
import { Container, Grid } from '@mui/material'
import { TextField } from '../../shared/components/TextField'


interface SignInViewProps{
    onCpfChange?: any
    onChange?: any
    onSubmit?: any
    passwordInput?: any
    loginIsValid?: any
}

export const SignInView: React.FC<SignInViewProps> = ({
    onCpfChange,
    onChange,
    onSubmit,
    passwordInput,
    loginIsValid
}) => {

    const style = useStyle()

    return(
        <>
        
        </>
    )
}