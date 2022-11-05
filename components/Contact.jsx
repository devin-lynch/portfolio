import Image from 'next/image'

export default function Contact() {
    return (
        <div>
            Contact Me

            <div>Resume</div> {/* check on removing phone number from resume before linking */}

            <div>
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
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='75'
                        width='75'
                    />
                </a>
            </div>

        </div>
    )
}