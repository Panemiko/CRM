import React from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { MdSearch as SearchIcon } from 'react-icons/md'

export default function SearchClients(props) {
    const { onSearch } = props

    return (
        <div>
            <TextField
                label='Pesquisar'
                size='small'
                style={{ marginRight: '8px' }}
            />
            <IconButton color='primary'>
                <SearchIcon />
            </IconButton>
        </div>
    )
}
