import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div id='about' className='mb-64'>

            <div className='flex justify-center mt-16'>
                <img src='https://i.imgur.com/Rcd9xQw.png' alt='photo of Devin' className='rounded-full mt-5' />
            </div>
            
            <p className='mt-16'>Hello world! I&#39;m Devin, a full stack software developer based in San Antonio, Texas.<br></br> I&#39;m a recent graduate of General Assembly&#39;s Software Engineering Immersive program, where I gained a strong foundation in JavaScript/MERN stack technologies.<br></br> During my time with General Assembly, I completed various projects that allowed me to practice my skills and apply what I learned in a real world setting.<br></br> I am a fast learner and thrive in a dynamic, fast-paced environment. I am also a strong collaborator and enjoy working on projects as part of a team. <br></br> I would love to hear any questions/collaboration proposals you may have!</p>

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