import React from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
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
    const [loading, setLoading] = React.useState(false)
    const [shrink, setShrink] = React.useState(undefined)
    const [birthFocused, setBirthFocused] = React.useState(false)
    const [values, setValues] = React.useState({
        name: '',
        address: '',
        birth: '',
        phone: '',
        occupation: '',
        gender: 'Masculino',
        maritalState: 'Solteiro',
    })

    React.useEffect(() => {
        if (load && Object.keys(load).length !== 0) {
            setShrink(true)
            setValues(load)
        } else setShrink(undefined)
    }, [load])

    const submitForm = React.useCallback((e) => {
        e.preventDefault()
        setLoading(true)
        onSubmit(values)
        setLoading(false)
    })

    return (
        <FormContainer onSubmit={submitForm}>
            <StyledField
                id='name'
                label='Nome'
                required
                size='small'
                autoComplete='off'
                InputLabelProps={{ shrink }}
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <StyledField
                id='address'
                label='Endereço'
                size='small'
                autoComplete='off'
                InputLabelProps={{ shrink }}
                value={values.address}
                onChange={(e) =>
                    setValues({ ...values, address: e.target.value })
                }
            />
            <StyledField
                id='birth'
                type={values.birth === '' && !birthFocused ? 'text' : 'date'}
                label='Nascimento'
                size='small'
                autoComplete='off'
                InputLabelProps={{ shrink }}
                focused={birthFocused}
                onFocus={() => setBirthFocused(true)}
                onBlur={() => setBirthFocused(false)}
                value={values.birth}
                onChange={(e) =>
                    setValues({ ...values, birth: e.target.value })
                }
            />
            <StyledField
                id='phone'
                type='tel'
                label='Telefone'
                size='small'
                autoComplete='off'
                InputLabelProps={{ shrink }}
                value={values.phone}
                onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                }
            />
            <StyledField
                id='occupation'
                label='Ocupação'
                size='small'
                autoComplete='off'
                InputLabelProps={{ shrink }}
                value={values.occupation}
                onChange={(e) =>
                    setValues({ ...values, occupation: e.target.value })
                }
            />
            <div>
                <FormLabel>Gênero</FormLabel>
                <RadioGroup
                    value={values.gender}
                    onChange={(e) =>
                        setValues({ ...values, gender: e.target.value })
                    }
                    row
                >
                    <FormControlLabel
                        value='Masculino'
                        control={<Radio />}
                        label='Masculino'
                    />
                    <FormControlLabel
                        value='Feminino'
                        control={<Radio />}
                        label='Feminino'
                    />
                </RadioGroup>
            </div>
            <div>
                <FormLabel>Estado Civil</FormLabel>
                <RadioGroup
                    value={values.maritalState}
                    onChange={(e) =>
                        setValues({ ...values, maritalState: e.target.value })
                    }
                    row
                >
                    <FormControlLabel
                        value='Solteiro'
                        control={<Radio />}
                        label='Solteiro(a)'
                    />
                    <FormControlLabel
                        value='Casado'
                        control={<Radio />}
                        label='Casado(a)'
                    />
                    <FormControlLabel
                        value='Separado'
                        control={<Radio />}
                        label='Separado(a)'
                    />
                    <FormControlLabel
                        value='Divorciado'
                        control={<Radio />}
                        label='Divorciado(a)'
                    />
                    <FormControlLabel
                        value='Viuvo'
                        control={<Radio />}
                        label='Viúvo(a)'
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
