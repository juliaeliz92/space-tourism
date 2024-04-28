import { useEffect, useState, type ReactElement } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { Layout, Subtitle, Tabs, Title, SubHeading, SubContent, Paragraph } from '@/components';
import type { NextPageWithLayout } from './_app';
import { destinationObjectType } from '@/types';
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

    const selectDestination = (destination: string) => {
        let destObj = destinationData.destinations.find(dest => dest.name === destination)
        destObj && setSelectedDestination(destObj)
    }

    return <section className='p-6 md:px-8 md:pb-16 lg:p-20 flex flex-col items-center h-full justify-between'>
        <Subtitle ind={1} text='pick your destination'/>
        <div className='flex flex-col lg:flex-row items-center w-full justify-between gap-6'>
            <div className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] relative'>
                <Image src={selectedDestination.image} fill alt='destination' />
            </div>
            <div className='lg:w-2/5 flex flex-col items-center gap-10'>
                <Tabs tabs={destinationNames} selectedTab={selectedDestination.name} handleTabSelection={(destination) => selectDestination(destination)}/>
                <article className='flex flex-col items-center text-center border-b border-b-[#979797] pb-10 md:w-3/4 lg:w-full lg:gap-4'>
                    <Title destination={selectedDestination.name} />
                    <Paragraph>{selectedDestination.description}</Paragraph>
                </article>
                <section className='flex flex-col justify-between gap-6 md:flex-row'>
                    <article className='flex flex-col items-center '>
                        <SubHeading heading='avg. distance' />
                        <SubContent>{selectedDestination.distance}</SubContent>
                    </article>
                    <article className='flex flex-col items-center'>
                        <SubHeading heading='est. travel time' />
                        <SubContent>{selectedDestination.travel}</SubContent>
                    </article>
                </section>
            </div>
        </div>
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