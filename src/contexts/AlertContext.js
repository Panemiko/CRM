import React from 'react'

export default React.createContext({
    alert: { severity: 'none', message: 'none' },
    setAlert(alert) {
        return alert
    },
})
