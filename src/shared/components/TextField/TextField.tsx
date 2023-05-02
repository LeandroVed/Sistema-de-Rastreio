import React, { ReactNode } from "react"
import { TextField as MuiTextField } from "@mui/material"

interface TextFieldProps {
    type?: 'number' | 'email' | 'password' | 'date'
    inputMode?:
    | 'none'
    | 'text'
    | 'numeric'
    error?: boolean
    placeholder?: string
    value?: string
    label: string
    children?: ReactNode
}

export const TextField: React.FC<TextFieldProps> = ({
    type,
    error,
    placeholder,
    value,
    label,
    children
}) => {
    return(
        <MuiTextField
            data-test-id="text-field"
            type={type}
            error={error}
            placeholder={placeholder}
            value={value}
            label={label}
        >
            {children}
        </MuiTextField>
    )
}