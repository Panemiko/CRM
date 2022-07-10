import React from 'react'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'
import Context from '@contexts/Context'
import useApi from '@hooks/useApi'
import { Button } from '@mui/material'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
`

const TextArea = styled(TextField)`
    width: 60vw;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
`

export default function NotesForm() {
    const { alert, modal, clientId } = React.useContext(Context)
    const [client, setClient] = React.useState({})
    const [notes, setNotes] = React.useState('')
    const [saved, setSaved] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const api = useApi()

    React.useEffect(() => {
        setLoading(true)
        api.get(
            `/client?query=${JSON.stringify({
                id: { equals: clientId.value },
            })}`
        )
            .then((response) => {
                const queryClient = response.data.clients[0]

                setClient(queryClient)
                setSaved(queryClient.notes)
                setNotes(queryClient.notes)
                setLoading(false)
            })
            .catch(() => {
                alert.setAlert('error', 'Ocorreu um erro interno')
                modal.closeModal()
            })
    }, [])

    const submitNotes = React.useCallback((e) => {
        e.preventDefault()
        setLoading(true)
        api.put('/client', {
            id: clientId.value,
            client: { notes },
        }).then(() => {
            setLoading(false)
            setSaved(notes)
            alert.setAlert(
                'success',
                `Notas do cliente '${client.name}' atualizadas`
            )
        })
    })

    const handleClose = React.useCallback(() => {
        modal.closeModal()
    })

    return (
        <div>
            <Typography
                style={{ marginBottom: '32px', textAlign: 'center' }}
                variant='h4'
                component='h2'
            >
                Notas
            </Typography>
            <Form onSubmit={submitNotes}>
                <TextArea
                    label='Notas'
                    multiline
                    minRows={10}
                    maxRows={15}
                    InputLabelProps={{ shrink: true }}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <ButtonsContainer>
                    <Button onClick={handleClose}>Fechar</Button>
                    <LoadingButton
                        disabled={notes === saved}
                        loading={loading}
                        loadingIndicator='Salvando'
                        variant='contained'
                        type='submit'
                    >
                        Salvar
                    </LoadingButton>
                </ButtonsContainer>
            </Form>
        </div>
    )
}
