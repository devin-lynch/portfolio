import Image from 'next/image'



export default function Skills() {
    return (
        // <div className='mt-64' id='skills'>
        <div className='' id='skills'>
            <p className='mb-10 text-xl italic'>Skills</p>
            {/* <div className='flex items-center justify-center'> */}
            <div className='grid grid-cols-2 justify-items-center sm:grid-cols-4 lg:flex lg:justify-center'>
                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/javascript--v1.png' className='skills'/>
                    <p>JavaScript</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/mongodb.png' className='skills' />
                    <p>MongoDB</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/officel/512/express-js.png' className='skills'/>
                    <p>Express.js</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/react-native.png' className='skills' />
                    <p>React</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/nodejs.png' className='skills' />
                    <p>Node.js</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/python.png' className='skills' />
                    <p>Python</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/my-sql.png' className='skills' />
                    <p>SQL</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/postgreesql.png' className='skills' />
                    <p>PostgreSQL</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/git.png' className='skills' />
                    <p>Git</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/github.png' className='skills' />
                    <p>Github</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/html-5.png' className='skills' />
                    <p>HTML</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/tailwind_css.png' className='skills' />
                    <p>Tailwind</p>
                </div>

                <div className='text-center transform transition duration-500 hover:scale-110'>
                    <img src='https://img.icons8.com/color/512/bootstrap.png' className='skills' />
                    <p>Bootstrap</p>

                </div>
            </div>
        </div>
    )
}