import React from 'react'
import useApi from '@hooks/useApi'

export default function useApplicationContext() {
    function useAlertContext() {
        const [alertValue, setAlertValue] = React.useState({
            severity: 'none',
            message: 'none',
        })

        function setAlert(severity, message) {
            setAlertValue({ severity, message })
            setTimeout(
                () => setAlertValue({ severity: 'none', message: 'none' }),
                5000
            )
        }

        function handleAlert() {
            return {
                style: {
                    display: alertValue.severity === 'none' ? 'none' : 'flex',
                },
                severity:
                    alertValue.severity === 'none'
                        ? 'info'
                        : alertValue.severity,
                children: alertValue.message,
            }
        }

        return { value: alertValue, setAlert, handleAlert }
    }

    function useClientIdContext() {
        const [clientIdValue, setClientIdValue] = React.useState('none')

        return { value: clientIdValue, setClientId: setClientIdValue }
    }

    function useModalContext() {
        const [modalValue, setModalValue] = React.useState('none')

        function registerModal(modalName) {
            return {
                open: modalValue === modalName,
                onClose() {
                    setModalValue('none')
                },
            }
        }

        function closeModal() {
            setModalValue('none')
        }

        return {
            value: modalValue,
            setModal: setModalValue,
            registerModal,
            closeModal,
        }
    }

    function useSearchContext() {
        const [filterValue, setFilterValue] = React.useState({})
        const [clientsValue, setClientsValue] = React.useState([])
        const api = useApi()

        function search() {
            api.get(`/client?query=${JSON.stringify(filterValue)}`).then(
                (response) => {
                    setClientsValue(response.data.clients)
                }
            )
        }

        return {
            filter: filterValue,
            setFilter: setFilterValue,
            clients: clientsValue,
            setClients: setClientsValue,
            search,
        }
    }

    return {
        alert: useAlertContext(),
        clientId: useClientIdContext(),
        modal: useModalContext(),
        search: useSearchContext(),
    }
}
