import React from 'react'

export default function useAlert() {
    const [alert, setAlertRaw] = React.useState({
        severity: 'none',
        message: 'none',
    })

    function setAlert(severity, message) {
        setAlertRaw({ severity, message })
        setTimeout(() => setAlert({ severity: 'none', message: 'none' }), 5000)
    }

    function handleAlert() {
        return {
            style: {
                display: alert.severity === 'none' ? 'none' : 'flex',
            },
            severity: alert.severity === 'none' ? 'info' : alert.severity,
            children: alert.message,
        }
    }

    return { alert, setAlert, handleAlert }
}
