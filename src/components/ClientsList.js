import React from 'react'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import ClientView from '@components/ClientView'
import Context from '@contexts/Context'

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
    const [loading, setLoading] = React.useState(false)
    const { search } = React.useContext(Context)

    React.useEffect(() => {
        setLoading(true)
        search.search()
        setLoading(false)
    }, [])

    return (
        <ClientsContainer>
            {loading && (
                <LoadingContainer>
                    <CircularProgress />
                </LoadingContainer>
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
