import React from 'react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Page from '@components/Page'
import ClientsList from '@components/ClientsList'
import SearchClients from '@components/SearchClients'

const PageContainer = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    width: 80vw;
`

const Header = styled.header`
    width: 100%;
    padding: 0 24px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
`

export default function Home() {
    return (
        <Page title='Clientes'>
            <PageContainer>
                <ContentContainer>
                    <Header>
                        <SearchClients />
                        <div>
                            <Button variant='contained'>Criar cliente</Button>
                        </div>
                    </Header>
                    <ClientsList />
                </ContentContainer>
            </PageContainer>
        </Page>
    )
}
