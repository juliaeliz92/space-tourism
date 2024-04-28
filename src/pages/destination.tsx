import { useEffect, useState, type ReactElement } from 'react'
import Head from 'next/head';
import Image from 'next/image'
import { Layout, Subtitle, Tabs } from '@/components'
import type { NextPageWithLayout } from './_app';
import destinationObjectType from '@/sections/destination/destinationTypes';
import destinationData from '@/data.json';
import '@/app/globals.scss'

const Page: NextPageWithLayout = () => {
    const [selectedDestination, setSelectedDestination] = useState<destinationObjectType>(destinationData.destinations[0])
    const [destinationNames, setDestinationNames] = useState<string[]>([])
    useEffect(() => {
        let destinations:string[] = []
        destinationData.destinations.map(destination => destinations.push(destination.name))
        setDestinationNames(destinations)
    }, [])
    return <section className='p-6 flex flex-col items-center h-full justify-between'>
        <Subtitle ind={0} text='pick your destination'/>
        <Image src={selectedDestination.image} width='100' height='100' alt='destination' />
        <Tabs tabs={destinationNames} />
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