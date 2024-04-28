import { useEffect, useState, type ReactElement } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { Layout, Subtitle, Stepper, Heading, Paragraph, SubContent } from '@/components';
import type { NextPageWithLayout } from './_app';
import { crewObjectType } from '@/types';
import { barlow } from '@/app/fonts';
import crewData from '@/data.json';
import '@/app/globals.scss'

const Page: NextPageWithLayout = () => {
    const [selectedCrew, setSelectedCrew] = useState<crewObjectType>(crewData.crew[0])
    const [crewNames, setCrewNames] = useState<string[]>([])
    useEffect(() => {
        let crews: string[] = []
        crewData.crew.map(crew => crews.push(crew.name))
        setCrewNames(crews)
    }, [])

    const selectCrew = (crew: string) => {
        let crewObj = crewData.crew.find(crw => crw.name === crew)
        crewObj && setSelectedCrew(crewObj)
    }

    return <section className='p-6 md:px-10 md:pt-8 md:pb-0 lg:pt-2 flex flex-col md:justify-between items-center h-full gap-6'>
        <Subtitle ind={2} text='meet your crew' />
        <div className='flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse w-full justify-center gap-6 md:gap-10'>
            <div className='w-[220px] h-[223px] md:w-[350px] md:h-[400px] lg:w-[520px] lg:h-[600px] border-b border-b-[#979797] relative'>
                <Image src={selectedCrew.image} fill alt='destination' className='px-6' />
            </div>
            <div className='flex flex-col md:flex-col-reverse md:w-3/5 lg:w-2/5 items-center lg:items-start gap-6 lg:gap-20'>
                <Stepper steps={crewNames} selectedStep={selectedCrew.name} handleSelection={(crew) => selectCrew(crew)} />
                <div className='flex flex-col gap-2 items-center lg:items-start'>
                    <Heading>{selectedCrew.role}</Heading>
                    <SubContent style='text-2xl md:text-4xl lg:text-6xl'>{selectedCrew.name}</SubContent>
                    <Paragraph>{selectedCrew.bio}</Paragraph>
                </div>
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