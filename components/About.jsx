import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Devin</h1>

            <p className={styles.extraGreen}>Hi! I am Devin, I am a software engineer, and I make neat stuff with code!</p>
            
            <div className='flex justify-center'>
                <img src='https://i.imgur.com/Rcd9xQw.png' alt='photo of Devin' className='rounded-full' />
            </div>

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