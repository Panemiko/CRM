import React from 'react'
import Head from 'next/head'

export default function Page(props) {
    const { title, description, children } = props

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            {children}
        </>
    )
}
