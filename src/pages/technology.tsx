import { useEffect, useState, type ReactElement } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { Layout, Subtitle, StepperLarge, SubHeading, Paragraph, SubContent } from '@/components';
import type { NextPageWithLayout } from './_app';
import { technologyObjectType } from '@/types';
import technologyData from '@/data.json';
import '@/app/globals.scss'

const Page: NextPageWithLayout = () => {
    const [selectedTechnology, setSelectedTechnology] = useState<technologyObjectType>(technologyData.technology[0])
    const [technologyNames, setTechnologyNames] = useState<string[]>([])
    useEffect(() => {
        let technologies: string[] = []
        technologyData.technology.map(technology => technologies.push(technology.name))
        setTechnologyNames(technologies)
    }, [])

    const selectTechnology = (technology: string) => {
        let technologyObj = technologyData.technology.find(tech => tech.name === technology)
        technologyObj && setSelectedTechnology(technologyObj)
    }

    return <section className='flex flex-col md:justify-between items-center h-full py-10 lg:pt-6'>
        <Subtitle ind={3} text='space launch 101' style='md:pl-10' />
        <div className='flex flex-col lg:flex-row-reverse items-center w-full lg:justify-between gap-6 md:gap-10'>
            <div className='w-full h-[152px] md:h-[320px] lg:w-[515px] lg:h-[527px] relative'>
                <picture>
                    <source media="(min-width: 991px)" srcSet={selectedTechnology.images.portrait} />
                    <Image src={selectedTechnology.images.landscape} fill alt='technology'/>
                </picture>
            </div>
            <div className='flex flex-col lg:flex-row md:w-3/5 items-center gap-6 md:gap-10 md:pb-10 lg:pb-0 lg:pl-36'>
                <StepperLarge steps={technologyNames} selectedStep={selectedTechnology.name} handleSelection={(tech) => selectTechnology(tech)} />
                <div className='flex flex-col gap-2 items-center lg:items-start px-8'>
                    <SubHeading heading='THE TERMINOLOGY…' />
                    <SubContent style='text-2xl md:text-4xl lg:text-6xl'>{selectedTechnology.name}</SubContent>
                    <Paragraph>{selectedTechnology.description}</Paragraph>
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