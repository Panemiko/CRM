import React from 'react'
import useApi from './useApi'

export default function useSearch() {
    const [filter, setFilter] = React.useState({})
    const [clients, setClients] = React.useState([])
    const api = useApi()

    function search() {
        api.get(`/client?query=${JSON.stringify(filter)}`).then((response) => {
            setClients(response.data.clients)
        })
    }

    return { filter, setFilter, clients, setClients, search }
}
