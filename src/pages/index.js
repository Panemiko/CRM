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
import useAlert from '@hooks/useAlert'
import useModal from '@hooks/useModal'
import useSearch from '@hooks/useSearch'

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
    const { alert, setAlert, handleAlert } = useAlert()
    const { modal, setModal, registerModal, closeModal } = useModal()
    const { filter, setFilter, clients, setClients, search } = useSearch()

    return (
        <Context.Provider
            value={{
                alert: { alert, setAlert },
                modal: { modal, setModal, closeModal },
                search: { filter, setFilter, clients, setClients, search },
            }}
        >
            <Page title='Clientes' description='Listagem de clientes'>
                <Modal {...registerModal('register')}>
                    <ModalWindow>
                        <RegisterForm />
                    </ModalWindow>
                </Modal>
                <PageContainer>
                    <Alert {...handleAlert()} />
                    <ContentContainer>
                        <Header>
                            <SearchClients />
                            <div>
                                <Button
                                    onClick={() => setModal('register')}
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
