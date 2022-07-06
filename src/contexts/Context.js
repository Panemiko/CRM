import React from 'react'

export default React.createContext({
    alert: {
        alert: { severity: 'none', message: 'none' },
        setAlert(alert) {
            return alert
        },
    },
    modal: {
        modal: 'none',
        setModal(modal) {
            return modal
        },
    },
})
