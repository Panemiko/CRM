import React from 'react'
import Link from 'next/link'
import styles from '@styles/index.module.css'
import Page from '@components/Page'

export default function Home() {
    return (
        <Page title='Clientes'>
            <div className={styles.container}>
                <Link href='/client/delete'>Anotações</Link>
                <Link href='/client/create'>Criar cliente</Link>
                <Link href='/client/edit'>Editar cliente</Link>
                <Link href='/client/delete'>Deletar cliente</Link>
            </div>
        </Page>
    )
}
