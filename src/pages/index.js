import React from 'react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Alert from '@components/Alert'
import Modal from '@components/Modal'
import ModalWindow from '@components/ModalWindow'
import Page from '@components/Page'
import ClientsList from '@components/ClientsList'
import RegisterForm from '@components/RegisterForm'
import SearchClients from '@components/SearchClients'
import Context from '@contexts/Context'
import EditForm from '@components/EditForm'
import useApplicationContext from '@hooks/useApplicationContext'

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
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
`

export default function Home() {
    const applicationContext = useApplicationContext()
    const { modal, alert } = applicationContext

    return (
        <Context.Provider value={applicationContext}>
            <Page title='Clientes' description='Listagem de clientes'>
                <Modal {...modal.registerModal('register')}>
                    <ModalWindow>
                        <RegisterForm />
                    </ModalWindow>
                </Modal>
                <Modal {...modal.registerModal('edit')}>
                    <ModalWindow>
                        <EditForm />
                    </ModalWindow>
                </Modal>
                <PageContainer>
                    <Alert {...alert.handleAlert()} />
                    <ContentContainer>
                        <Header>
                            <SearchClients />
                            <div>
                                <Button
                                    onClick={() => modal.setModal('register')}
                                    variant='contained'
                                >
                                    Criar cliente
                                </Button>
                            </div>
                        </Header>
                        <ClientsList />
                    </ContentContainer>
                </PageContainer>
            </Page>
        </Context.Provider>
    )
}
