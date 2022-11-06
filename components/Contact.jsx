import Image from 'next/image'

export default function Contact() {
    return (
        <div className='mt-4'>
            Contact Me
            <div className='flex justify-center mt-3'>

                <div className=''>
                    <a href=''>
                        <img src='https://img.icons8.com/ios-filled/512/set-as-resume.png' alt='Resume icon' className='resumeIcon'/>
                    </a>
                </div> {/* check on removing phone number from resume before linking */}

                <div className='mr-1'>
                    <a href='https://www.linkedin.com/in/lynch-devin/'>
                        <Image
                            src='/linkedin.png'
                            alt='LinkedIn logo'
                            height='75'
                            width='75'
                        />
                    </a>
                </div>

                <div>
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
        </div>
    )
}