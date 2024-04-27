import { bellefair } from '@/app/fonts';


export default function Button() {

    return <div className='h-52 w-52 md:w-72 md:h-72 lg:w-96 lg:h-96 flex justify-center items-center'>
        <div className={`h-36 w-36 md:w-60 md:h-60 lg:w-72 lg:h-72 uppercase flex justify-center items-center transition-all z-0 rounded-full hover:bg-[#979797] hover:h-52 hover:w-52 md:hover:w-72 md:hover:h-72 lg:hover:w-96 lg:hover:h-96 ${bellefair.className}`}>
            <div className='bg-white w-36 h-36 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full text-lg md:text-3xl lg:text-4xl flex justify-center items-center'>explore</div>
        </div>
    </div>
}