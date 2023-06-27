import React from 'react'
import { cpfMask } from '../../shared/masks/cpfMask'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'




export const SignInView: React.FC = () => {
   // const token = useToken()
    const history = useHistory()
    const dispacth = useDispatch()

const [ taxIdInput, setCpfInput ] = useMask(cpfMask)
const [onChange, setOnChange] = React.useState(Boolean)
const [switchAlternateState, setSwitchAlternateState] =
    React.useState(Boolean)
const [cookies, setCookie, removeCookie] = useCookies(['login-token'])





const onStorageTaxId = () => {
    if (switchAlternateState === false && validateTaxNumber(taxIdInput)) {
      setSwitchAlternateState(true)
      localStorage.setItem('TaxIdLogin', taxIdInput)
      const taxId = localStorage.getItem('TaxIdLogin')
      setCpfInput(taxId!)
      const maskCpfDigits = taxIdInput
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '*.$2')
        .replace(/(\d{3})(\d{1,2})/, '*-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
      localStorage.setItem('TaxId', maskCpfDigits)
      setOnChange(true)
    } else {
      setSwitchAlternateState(false)
      setOnChange(false)
      removeCookie('login-token')
      localStorage.removeItem('TaxId')
      localStorage.removeItem('TaxIdLogin')
    }
  }



  return (
    <SignInView
        
    
    />

  )
}