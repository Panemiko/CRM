import React from 'react'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import ClientView from '@components/ClientView'
import useApi from '@hooks/useApi'

const ClientsContainer = styled.ol`
    height: 80vh;
    border: 1px solid gray;
    border-radius: 8px;
    overflow: auto;
`

const LoadingContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ClientsList() {
    const [clients, setClients] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const api = useApi()

    function getClients() {
        setLoading(true)

        api.get('/client').then((response) => {
            setLoading(false)
            setClients(response.data.clients)
        })
    }

    React.useEffect(getClients, [])

    return (
        <ClientsContainer>
            {loading && (
                <LoadingContainer>
                    <CircularProgress />
                </LoadingContainer>
            )}
            {clients.map((client, index) => (
                <ClientView
                    key={index}
                    clientName={client.name}
                    clientId={client.id}
                />
            ))}
        </ClientsContainer>
    )
}
