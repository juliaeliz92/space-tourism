
import type { ReactElement } from 'react'
import Head from 'next/head';
import { Layout, Button } from '@/components'
import type { NextPageWithLayout } from './_app';
import { barlow_condensed, bellefair, barlow } from '@/app/fonts';
import '@/app/globals.scss'

const Page: NextPageWithLayout = () => {
    return <section className='h-full flex flex-col lg:flex-row items-center p-6 md:pt-0 justify-between'>
        <div className='flex flex-col items-center justify-between lg:items-start md:pt-4 lg:pt-0 gap-4'>
            <h3 className={`text-base md:text-xl lg:text-3xl text-[#D0D6F9] uppercase tracking-widest ${barlow_condensed.className}`}>
                so, you want to travel to
            </h3>
            <h1 className={`text-7xl lg:text-left md:text-9xl text-white uppercase ${bellefair.className}`}>
                space
            </h1>
            <p className={`text-[#D0D6F9] text-base lg:text-xl text-center lg:text-left md:w-[444px] ${barlow.className}`}>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <div className='flex items-end'>
            <Button />
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
                    content="Cool website using Next.js on Space Travel, the technology used and the amazing crew"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Space Travel" />
                <meta property="og:image" content="https://i.ibb.co/YZRxK3G/space-travel.png"/>
                <meta property="og:description" content="Cool website using Next.js on Space Travel, the technology used and the amazing crew"/>
                <meta property="og:url" content="https://space-tourism-lyart-one.vercel.app/" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
                <meta property="og:author" content="Julia Paul" />
                <link rel="icon" href="/images/icon.ico" />
            </Head>
            <Layout>
                {page}
            </Layout>
        </>
    )
}

export default Page