import React from 'react'
import Head from 'next/head'

export default function Page(props) {
    const { title, children } = props

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}
