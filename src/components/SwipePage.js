import React from 'react'
import styled from '@emotion/styled'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import {
    MdNavigateNext as NextIcon,
    MdNavigateBefore as PreviousIcon,
} from 'react-icons/md'
import Context from '@contexts/Context'
import Typography from '@mui/material/Typography'

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export default function SwipePage() {
    const { search } = React.useContext(Context)
    const [disabled, setDisabled] = React.useState(false)

    const previousPage = React.useCallback(async () => {
        setDisabled(true)
        search.setPage(search.page - 1)
        setDisabled(false)
    })

    const nextPage = React.useCallback(async () => {
        setDisabled(true)
        search.setPage(search.page + 1)
        setDisabled(false)
    })

    return (
        <PageContainer>
            <ButtonGroup variant='contained'>
                {search.page > 0 && (
                    <IconButton disabled={disabled} onClick={previousPage}>
                        <PreviousIcon />
                    </IconButton>
                )}
                <IconButton disabled={disabled} onClick={nextPage}>
                    <NextIcon />
                </IconButton>
            </ButtonGroup>
            <Typography>{`Pág: ${search.page + 1}`}</Typography>
        </PageContainer>
    )
}
