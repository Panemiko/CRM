import React from 'react'
import { useForm } from 'react-hook-form'
import {
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import Page from '@components/Page'
import useApi from '@hooks/useApi'

export default function ClientRegister() {
    const { register, handleSubmit } = useForm()
    const [birth, setBirth] = React.useState(null)
    const [status, setStatus] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const api = useApi()

    async function registerClient(client) {
        setLoading(true)

        client.birth = client.birth
            ? new Date(client.birth).toISOString()
            : undefined

        try {
            await api.post('/client', { client })

            document.location.pathname = '/'
        } catch (err) {
            setStatus('Um erro interno ocorreu')
        }
    }

    return (
        <Page title='Cadastrar Cliente'>
            <form
                onSubmit={handleSubmit(registerClient)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                }}
            >
                <TextField
                    id='name'
                    label='Nome'
                    {...register('name')}
                    size='small'
                    required
                    autoComplete='off'
                />
                <TextField
                    id='address'
                    label='Endereço'
                    {...register('address')}
                    size='small'
                    autoComplete='off'
                />
                <DatePicker
                    label='Nascimento'
                    inputFormat='dd/MM/yyyy'
                    value={birth}
                    onChange={setBirth}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            {...register('birth')}
                            id='birth'
                            size='small'
                            autoComplete='off'
                        />
                    )}
                />
                <TextField
                    id='phone'
                    type='tel'
                    label='Telefone'
                    {...register('phone')}
                    size='small'
                    autoComplete='off'
                />
                <TextField
                    id='occupation'
                    label='Ocupação'
                    {...register('occupation')}
                    size='small'
                    autoComplete='off'
                />
                <FormLabel>Gênero</FormLabel>
                <RadioGroup defaultValue='Masculino' row>
                    <FormControlLabel
                        value='Masculino'
                        control={<Radio />}
                        label='Masculino'
                        {...register('gender')}
                    />
                    <FormControlLabel
                        value='Feminino'
                        control={<Radio />}
                        label='Feminino'
                        {...register('gender')}
                    />
                </RadioGroup>
                <FormLabel>Estado Civil</FormLabel>
                <RadioGroup defaultValue='Solteiro' row>
                    <FormControlLabel
                        value='Solteiro'
                        control={<Radio />}
                        label='Solteiro(a)'
                        {...register('maritalState')}
                    />
                    <FormControlLabel
                        value='Casado'
                        control={<Radio />}
                        label='Casado(a)'
                        {...register('maritalState')}
                    />
                    <FormControlLabel
                        value='Separado'
                        control={<Radio />}
                        label='Separado(a)'
                        {...register('maritalState')}
                    />
                    <FormControlLabel
                        value='Divorciado'
                        control={<Radio />}
                        label='Divorciado(a)'
                        {...register('maritalState')}
                    />
                    <FormControlLabel
                        value='Viuvo'
                        control={<Radio />}
                        label='Viúvo(a)'
                        {...register('maritalState')}
                    />
                </RadioGroup>
                {status}
                <Button
                    loading={loading}
                    loadingPosition='start'
                    startIcon={<SaveIcon />}
                    variant='contained'
                >
                    Cadastrar
                </Button>
            </form>
        </Page>
    )
}
