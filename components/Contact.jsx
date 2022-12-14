import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className='mt-32' id='contact'>
            <p>Contact Me</p>
            <div className='flex justify-center mt-1'>

                <div className='transform transition duration-500 hover:scale-110'>
                    <a href='https://docs.google.com/document/d/1LPBore_Dkbh-FunhyKtF-mLjjr_6J3-w0P4mKFddchQ/edit?usp=sharing'>
                        <img src='https://img.icons8.com/ios-filled/512/set-as-resume.png' alt='Resume icon' className='resumeIcon'/>
                    </a>
                </div> {/* check on removing phone number from resume before linking */}

                <div className='mr-1  transform transition duration-500 hover:scale-110'>
                    <a href='https://www.linkedin.com/in/lynch-devin/'>
                        <Image
                            src='/linkedin.png'
                            alt='LinkedIn logo'
                            height='75'
                            width='75'
                        />
                    </a>
                </div>

                <div className='transform transition duration-500 hover:scale-110'>
                    <a href='https://github.com/devin-lynch'>
                        <Image
                            src='/github.png'
                            alt='Github logo'
                            height='75'
                            width='75'
                        />
                    </a>
                </div>

            </div>
            <div className='transform transition duration-500 hover:scale-110 mt-4'>
                <Link href='/'>
                    <Image
                        src='/totop.png'
                        alt='to top'
                        height='60'
                        width='60'
                    />
                </Link>
            </div>
        </div>
    )
}