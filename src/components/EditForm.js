import React from 'react'
import { format } from 'date-fns'
import Typography from '@mui/material/Typography'
import ClientForm from '@components/ClientForm'
import useApi from '@hooks/useApi'
import Context from '@contexts/Context'

export default function EditForm() {
    const { alert, modal, search, clientId } = React.useContext(Context)
    const [client, setClient] = React.useState({})
    const api = useApi()

    React.useEffect(() => {
        api.get(
            `/client?query=${JSON.stringify({
                id: { equals: clientId.value },
            })}`
        )
            .then((response) => {
                const clientResponse = response.data.clients[0]

                const birthDate = new Date(clientResponse.birth || undefined)

                clientResponse.birth =
                    clientResponse.birth &&
                    format(
                        birthDate.setDate(birthDate.getDate() + 1),
                        'yyyy-MM-dd'
                    )

                const {
                    name,
                    address,
                    cpf,
                    phone,
                    occupation,
                    gender,
                    maritalState,
                } = clientResponse

                setClient({
                    name,
                    address,
                    cpf,
                    phone,
                    occupation,
                    gender,
                    maritalState,
                })
            })
            .catch(() => {
                alert.setAlert('error', 'Ocorreu um erro interno')
            })
    }, [])

    const editClient = React.useCallback(async (client) => {
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
    })

    return (
        <>
            <Typography
                style={{ marginBottom: '32px', textAlign: 'center' }}
                variant='h4'
                component='h2'
            >
                Editar cliente
            </Typography>
            <ClientForm onSubmit={editClient} action='Editar' load={client} />
        </>
    )
}
