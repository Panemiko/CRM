import React from 'react'
import Typography from '@mui/material/Typography'
import ClientForm from '@components/ClientForm'
import useApi from '@hooks/useApi'
import Context from '@contexts/Context'

export default function EditForm() {
    const [client, setClient] = React.useState({})
    const api = useApi()
    const { alert, modal, search, clientId } = React.useContext(Context)

    async function loadClient() {
        const response = await api.get(
            `/client?query=${JSON.stringify({ id: clientId.value })}`
        )

        const clientResponse = response.data.clients[0]

        new Date(clientResponse.birth).toISOString(10, 8)

        setClient(response.data.clients[0])
    }

    React.useEffect(() => {
        loadClient()
    }, [])

    async function editClient(client) {
        client.birth =
            client.birth.length !== 0
                ? new Date(client.birth).toISOString()
                : undefined

        try {
            const response = await api.put('/client', {
                id: clientId.value,
                client,
            })

            alert.setAlert(
                'success',
                `Cliente '${response.data.client.name}' editado`
            )

            search.search()
        } catch (err) {
            alert.setAlert('error', 'Ocorreu um erro interno')
        }

        modal.closeModal()
    }

    return (
        <>
            <Typography
                style={{ marginBottom: '24px' }}
                variant='h4'
                component='h2'
            >
                Editar cliente
            </Typography>
            <ClientForm onSubmit={editClient} action='Editar' load={client} />
        </>
    )
}
