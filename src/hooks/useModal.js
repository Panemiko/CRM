import React from 'react'

export default function useModal() {
    const [modal, setModal] = React.useState('none')

    function registerModal(modalName) {
        return {
            open: modal === modalName,
            onClose() {
                setModal('none')
            },
        }
    }

    return { modal, setModal, registerModal }
}
