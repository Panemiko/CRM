import React from 'react'
import Typography from '@mui/material/Typography'
import ClientForm from '@components/ClientForm'
import useApi from '@hooks/useApi'
import AlertContext from '@contexts/AlertContext'

export default function RegisterForm() {
    const api = useApi()
    const alertContext = React.useContext(AlertContext)

    async function registerClient(client) {
        client.birth =
            client.birth.length !== 0
                ? new Date(client.birth).toISOString()
                : undefined

        try {
            const response = await api.post('/client', { client })

            alertContext.setAlert({
                severity: 'success',
                message: `Cliente ${response.data.client.name} criado`,
            })
        } catch (err) {
            alertContext.setAlert({
                severity: 'error',
                message: 'Ocorreu um erro interno',
            })
        }
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
