import React from 'react'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'

const ClientContainer = styled.li`
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    list-style: none;
`

export default function ClientView(props) {
    const { clientName, clientId } = props

    return (
        <ClientContainer>
            <Typography variant='subtitle1' component='span'>
                {clientName}
            </Typography>
            <div>{clientId}</div>
        </ClientContainer>
    )
}
