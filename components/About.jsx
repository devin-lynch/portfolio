import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Devin</h1>

            <div className='flex justify-center'>
                <img src='https://i.imgur.com/Rcd9xQw.png' alt='photo of Devin' className='rounded-full' />
            </div>
            
            <p className=''>Hey there! I&#39;m Devin, a full stack software developer.</p>

            {/* load an image locally */}
            {/* <Image
                src='/gutsss.jpg'
                alt='catte'
                width={320}
                height={400}
                // layout='fill'
            /> */}
            {/* load an image hosted on anotther domain */}

        </div>
    )
}