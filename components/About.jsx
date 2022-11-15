import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div id='about' className='mb-64'>

            <div className='flex justify-center mt-16'>
                <img src='https://i.imgur.com/Rcd9xQw.png' alt='photo of Devin' className='rounded-full mt-5' />
            </div>
            
            <p className='mt-16'>Hello world! I&#39;m Devin, a full stack software developer based in San Antonio, Texas.<br></br> I began coding in the fall of 2022, and I was quickly immersed and facinated with the developer world.<br></br> I would love to hear any questions/collaboration proposals you might have!</p>

            {/* load an image locally */}
            {/* <Image
                src='/gutsss.jpg'
                alt='catte'
                width={320}
                height={400}
                // layout='fill'
            /> */}
            {/* load an image hosted on another domain */}

        </div>
    )
}