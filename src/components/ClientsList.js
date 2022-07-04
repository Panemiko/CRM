import React from 'react'
import styled from '@emotion/styled'
import ClientView from '@components/ClientView'
import useApi from '@hooks/useApi'

const ClientsContainer = styled.div`
    height: 80vh;
    border: 1px solid gray;
    border-radius: 8px;
    overflow: auto;
`

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
`

export default function ClientsList() {
    const [clients, setClients] = React.useState([])
    const api = useApi()

    function getClients() {
        api.get('/client').then((response) => {
            setClients(response.data.clients)
        })
    }

    React.useEffect(getClients, [])

    return (
        <ClientsContainer>
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
