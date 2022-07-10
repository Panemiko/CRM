import React from 'react'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import ClientView from '@components/ClientView'
import Context from '@contexts/Context'
import { Typography } from '@mui/material'

const ClientsContainer = styled.ol`
    height: 80vh;
    border: 1px solid gray;
    border-radius: 8px;
    overflow: auto;
`

const InformationContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ClientsList() {
    const { search, loading: loadingContext } = React.useContext(Context)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        search.search()
    }, [])

    React.useEffect(() => {
        setLoading(loadingContext.clientsView.value)
    }, [loadingContext.clientsView.value])

    return (
        <ClientsContainer>
            {loading && (
                <InformationContainer>
                    <CircularProgress color='primary' />
                </InformationContainer>
            )}
            {search.clients.length === 0 && !loading && (
                <InformationContainer>
                    <Typography>Nenhum cliente encontrado</Typography>
                </InformationContainer>
            )}
            {search.clients.map((client, index) => (
                <ClientView
                    key={index}
                    clientName={client.name}
                    clientId={client.id}
                />
            ))}
        </ClientsContainer>
    )
}
