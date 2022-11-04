import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Devin</h1>

            <p className={styles.extraGreen}>Hi! I am Devin, I am a software engineer, and I make neat stuff with code!</p>

            {/* load an image locally */}
            <Image
                src='/gutsss.jpg'
                alt='catte'
                width={320}
                height={400}
                // layout='fill'
            />
            {/* <img
                src='/gutsss.jpg'
                alt='catte'
            /> */}
            {/* load an image hosted on anotther domain */}
            <Image
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}
            />
        </div>
    )
}