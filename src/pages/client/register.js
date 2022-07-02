import React from 'react'
import { useForm } from 'react-hook-form'
import Page from '@components/Page'

export default function ClientRegister() {
    const { register, getValues } = useForm()

    return (
        <Page title='Cadastrar Cliente'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='name'>
                    Nome
                    <input type='text' id='name' {...register('name')} />
                </label>
                <label htmlFor='address'>
                    Endereço
                    <input type='text' id='address' {...register('address')} />
                </label>
                <label htmlFor='birth'>
                    Nascimento
                    <input type='date' id='birth' {...register('birth')} />
                </label>
                <span>Gênero</span>
                <label htmlFor='masculino'>
                    <input
                        type='radio'
                        name='gender'
                        id='masculino'
                        value='Masculino'
                        defaultChecked
                        {...register('gender')}
                    />
                    Masculino
                </label>
                <label htmlFor='feminino'>
                    <input
                        type='radio'
                        name='gender'
                        id='feminino'
                        value='Feminino'
                        {...register('gender')}
                    />
                    Feminino
                </label>
                <span>Estado civil</span>
                <label htmlFor='solteiro'>
                    <input
                        type='radio'
                        name='maritalState'
                        id='solteiro'
                        value='Solteiro'
                        defaultChecked
                        {...register('maritalState')}
                    />
                    Solteiro (a)
                </label>
                <label htmlFor='casado'>
                    <input
                        type='radio'
                        name='maritalState'
                        id='casado'
                        value='Casado'
                        {...register('maritalState')}
                    />
                    Casado (a)
                </label>
                <label htmlFor='separado'>
                    <input
                        type='radio'
                        name='maritalState'
                        id='separado'
                        value='Separado'
                        {...register('maritalState')}
                    />
                    Separado (a)
                </label>
                <label htmlFor='divorciado'>
                    <input
                        type='radio'
                        name='maritalState'
                        id='divorciado'
                        value='Divorciado'
                        {...register('maritalState')}
                    />
                    Divorciado (a)
                </label>
                <label htmlFor='viuvo'>
                    <input
                        type='radio'
                        name='maritalState'
                        id='viuvo'
                        value='Viuvo'
                        {...register('maritalState')}
                    />
                    Viúvo (a)
                </label>
                <label>
                    Telefone
                    <input type='tel' id='phone' {...register('phone')} />
                </label>
                <label>
                    Ocupação
                    <input
                        type='text'
                        id='occupation'
                        {...register('occupation')}
                    />
                </label>
                <button onClick={() => alert(JSON.stringify(getValues()))}>
                    Cadastrar
                </button>
            </div>
        </Page>
    )
}
