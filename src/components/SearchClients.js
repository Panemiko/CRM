import React from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { MdSearch as SearchIcon } from 'react-icons/md'
import Context from '@contexts/Context'

export default function SearchClients() {
    const { search } = React.useContext(Context)

    function handleKeyDown(e) {
        if (e.key === 'Enter') search.search()
    }

    function updateSearch(e) {
        search.setFilter({
            name: {
                contains: e.target.value,
            },
        })
    }

    return (
        <div>
            <TextField
                label='Pesquisar'
                size='small'
                style={{ marginRight: '8px' }}
                onChange={updateSearch}
                onKeyDown={handleKeyDown}
            />
            <IconButton onClick={search.search} color='primary'>
                <SearchIcon />
            </IconButton>
        </div>
    )
}
