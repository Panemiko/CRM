import React from 'react'

export default React.createContext({
    modal: 'none',
    setModal(modal) {
        return modal
    },
})
