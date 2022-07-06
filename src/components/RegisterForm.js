import React from 'react'
import Typography from '@mui/material/Typography'
import ClientForm from '@components/ClientForm'
import useApi from '@hooks/useApi'
import Context from '@contexts/Context'

export default function RegisterForm() {
    const api = useApi()
    const { alert, modal, search } = React.useContext(Context)

    async function registerClient(client) {
        client.birth =
            client.birth.length !== 0
                ? new Date(client.birth).toISOString()
                : undefined

        try {
            const response = await api.post('/client', { client })

            alert.setAlert(
                'success',
                `Cliente '${response.data.client.name}' criado`
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
                Cadastrar cliente
            </Typography>
            <ClientForm onSubmit={registerClient} action='Cadastrar' />
        </>
    )
}
