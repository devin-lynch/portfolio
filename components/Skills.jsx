import Image from 'next/image'


export default function Skills() {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center'>
                <Image
                    src='/js.png'
                    alt='JavaScript logo'
                    width='90'
                    height='90'
                />
                <p>JavaScript</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/mongodb.png'
                    alt='MongoDB logo'
                    width='75'
                    height='75'
                />
                <p>MongoDB</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/express.png'
                    alt='Express.js logo'
                    width='130'
                    height='75'
                />
                <p>Express.js</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/react.png'
                    alt='React logo'
                    width='75'
                    height='75'
                />
                <p>React</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/node.png'
                    alt='Node.js logo'
                    width='75'
                    height='75'
                />
                <p>Node.js</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/python.png'
                    alt='Python logo'
                    width='75'
                    height='75'
                />
                <p>Python</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/django.png'
                    alt='Django logo'
                    width='75'
                    height='75'
                />
                <p>Django</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/postgres.png'
                    alt='PostgreSQL logo'
                    width='115'
                    height='115'
                />
                <p>PostgreSQL</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/tailwind.png'
                    alt='Tailwind logo'
                    width='110'
                    height='110'
                />
                <p>Tailwind</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/css.png'
                    alt='CSS logo'
                    width='62'
                    height='90'
                />
                <p>CSS</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/html.png'
                    alt='HTML logo'
                    width='100'
                    height='100'
                />
                <p>HTML</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/git.png'
                    alt='Git logo'
                    width='75'
                    height='75'
                />
                <p>Git</p>
            </div>

            <div className='text-center'>
                <Image
                    src='/githubwhite.png'
                    alt='Github logo'
                    width='70'
                    height='70'
                />
                <p>Github</p>
            </div>
        </div>
    )
}