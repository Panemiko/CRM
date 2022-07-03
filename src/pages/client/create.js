import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import {
    Alert,
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Page from '@components/Page'
import useApi from '@hooks/useApi'
import formStyles from '@styles/form.module.css'

export default function ClientRegister() {
    const { register, handleSubmit } = useForm()
    const router = useRouter()
    const [birth, setBirth] = React.useState(null)
    const [alert, setAlert] = React.useState({ severity: 'off', message: '' })
    const [loading, setLoading] = React.useState(false)
    const api = useApi()

    async function registerClient(client) {
        setLoading(true)

        client.birth =
            client.birth.length !== 0
                ? new Date(client.birth).toISOString()
                : undefined

        try {
            await api.post('/client', { client })

            router.push('/')
        } catch (err) {
            setAlert({ severity: 'error', message: 'Um erro interno ocorreu' })
        }

        setLoading(false)
    }

    return (
        <Page title='Cadastrar Cliente'>
            <main
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <form
                    className={formStyles.container}
                    onSubmit={handleSubmit(registerClient)}
                >
                    {alert.severity !== 'off' && (
                        <Alert severity={alert.severity}>{alert.message}</Alert>
                    )}
                    <Typography
                        variant='h4'
                        component='h1'
                        style={{ marginBottom: '12px' }}
                    >
                        Cadastrar
                    </Typography>
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
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                    <LoadingButton
                        loading={loading}
                        loadingPosition='start'
                        variant='outlined'
                        type='submit'
                        style={{
                            maxWidth: 'fit-content',
                        }}
                    >
                        Cadastrar
                    </LoadingButton>
                </form>
            </main>
        </Page>
    )
}
