import React from 'react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import LoadingButton from '@mui/lab/LoadingButton'

const FormContainer = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
`

const StyledField = styled(TextField)`
    width: 320px;
`

export default function ClientForm(props) {
    const { load, onSubmit, action } = props
    const { register, handleSubmit, setValue } = useForm()
    const [birth, setBirth] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        if (load) setValue(load)
    }, [])

    async function submitForm(data) {
        setLoading(true)
        onSubmit(data)
        setLoading(false)
    }

    return (
        <FormContainer onSubmit={handleSubmit(submitForm)}>
            <StyledField
                id='name'
                label='Nome'
                required
                size='small'
                autoComplete='off'
                {...register('name')}
            />
            <StyledField
                id='address'
                label='Endereço'
                size='small'
                autoComplete='off'
                {...register('address')}
            />
            <DatePicker
                label='Nascimento'
                inputFormat='dd/MM/yyyy'
                value={birth}
                onChange={setBirth}
                renderInput={(params) => (
                    <StyledField
                        id='birth'
                        size='small'
                        autoComplete='off'
                        {...params}
                        {...register('birth')}
                    />
                )}
            />
            <StyledField
                id='phone'
                type='tel'
                label='Telefone'
                size='small'
                autoComplete='off'
                {...register('phone')}
            />
            <StyledField
                id='occupation'
                label='Ocupação'
                size='small'
                autoComplete='off'
                {...register('occupation')}
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
                loadingIndicator='Enviando'
                variant='contained'
                type='submit'
                style={{
                    maxWidth: 'fit-content',
                }}
            >
                {action}
            </LoadingButton>
        </FormContainer>
    )
}
