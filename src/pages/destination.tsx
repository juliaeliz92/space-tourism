
import type { ReactElement } from 'react'
import Head from 'next/head';
import { Layout } from '@/components'
import type { NextPageWithLayout } from './_app';
import '@/app/globals.scss'

const Page: NextPageWithLayout = () => {
    return <section>
        
    </section>
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Head>
                <title>Space Travel</title>
                <meta
                    name="description"
                    content="Cool info on Space Travel"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/icon.ico" />
            </Head>
            <Layout>
                {page}
            </Layout>
        </>
    )
}

export default Page