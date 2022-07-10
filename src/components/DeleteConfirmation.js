import React from 'react'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import LoadingButton from '@mui/lab/LoadingButton'
import useApi from '@hooks/useApi'
import Context from '@contexts/Context'

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const AcionsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    justify-content: end;
`

export default function DeleteClient() {
    const { alert, clientId, modal, search } = React.useContext(Context)
    const [client, setClient] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const api = useApi()

    React.useEffect(() => {
        api.get(
            `/client?query=${JSON.stringify({
                id: { equals: clientId.value },
            })}`
        )
            .then((response) => {
                setClient(response.data.clients[0])
                setLoading(false)
            })
            .catch(() => {
                alert.setAlert('error', 'Ocorreu um erro interno')
                modal.closeModal()
            })
    }, [clientId.value])

    const handleCancel = React.useCallback(() => {
        modal.closeModal()
    })

    const handleDelete = React.useCallback(() => {
        setLoading(true)
        api.delete('/client', { data: { id: clientId.value } }).then(() => {
            search.search()
            setLoading(false)
            alert.setAlert('success', `Cliente '${client.name}' deletado`)
            modal.closeModal()
        })
    })
    return (
        <>
            <Container>
                {loading && (
                    <LoadingContainer>
                        <CircularProgress color='primary' />
                    </LoadingContainer>
                )}
                {!loading && (
                    <>
                        <Typography
                            as='h2'
                            variant='h5'
                            style={{ marginBottom: '12px' }}
                        >
                            Deletar{' '}
                            <strong>{`'${client.name || 'cliente'}'`}</strong>
                        </Typography>
                        <Typography style={{ marginBottom: '24px' }}>
                            Deletar um cliente é uma ação irreversível. Deseja
                            prosseguir?
                        </Typography>
                        <AcionsContainer>
                            <Button onClick={handleCancel}>Cancelar</Button>
                            <LoadingButton
                                variant='contained'
                                color='error'
                                onClick={handleDelete}
                            >
                                Deletar cliente
                            </LoadingButton>
                        </AcionsContainer>
                    </>
                )}
            </Container>
        </>
    )
}
