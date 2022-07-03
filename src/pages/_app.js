import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import '@styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Component {...pageProps} />
        </LocalizationProvider>
    )
}
