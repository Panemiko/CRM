import React from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { MdSearch as SearchIcon } from 'react-icons/md'
import Context from '@contexts/Context'

export default function SearchClients() {
    const { search: searchContext } = React.useContext(Context)
    const [search, setSearch] = React.useState('')

    const updateFilter = React.useCallback(() => {
        searchContext.setFilter(
            search !== ''
                ? {
                      name: {
                          contains: search,
                      },
                  }
                : {}
        )
    })

    const handleKeyDown = React.useCallback((e) => {
        if (e.key === 'Enter') updateFilter()
    })

    return (
        <div>
            <TextField
                label='Pesquisar'
                size='small'
                style={{ marginRight: '8px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <IconButton onClick={updateFilter} color='primary'>
                <SearchIcon />
            </IconButton>
        </div>
    )
}
