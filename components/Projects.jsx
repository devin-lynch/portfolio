import Image from 'next/image'

export default function Projects() {
    return (
        <div className='flex flex-col items-center'>
            <p className='mt-64 text-xl italic'>Projects</p>

            <div className='text-center mt-16'>
                <div className='md:flex items-center gap-5'>
                    <a href='https://github.com/devin-lynch/dreamplanner-client'>
                        <Image
                            src='/github.png'
                            alt='Github logo'
                            height='50'
                            width='50'
                        />
                    </a>
                    <a href='https://dreamplanner-dl.netlify.app/'><img src='https://i.imgur.com/eyliRfW.png' className='project transform transition duration-500 hover:scale-110' /></a>
                    <p><span className='italic text-3xl'><a href='https://dreamplanner-dl.netlify.app/'>DreamPlanner</a><br></br></span>A vacation expense/budget planner with unique user profiles to track destinations <br></br> Tech stack: React, Python, Django, PostgreSQL</p>
                </div>
            </div>

            <div className='text-center mt-10'>
                <div className='md:flex items-center gap-5'>
                    <p><span className='italic text-3xl'><a href='https://silver-beignet-215e62.netlify.app/'>Pod-Cats</a><br></br></span>A cat-lover&#39;s social media app to browse, save, and add comments to cats <br></br> Tech stack: MongoDB, Express, React, Node</p>
                    <a href='https://silver-beignet-215e62.netlify.app/'><img src='https://i.imgur.com/ZMEAjd0.png' className='project transform transition duration-500 hover:scale-110' /></a>
                    <a href='https://github.com/devin-lynch/pod-cats-client'>
                        <Image
                            src='/github.png'
                            alt='Github logo'
                            height='50'
                            width='50'
                        />
                    </a>
                </div>
            </div>

            <div className='text-center mt-10'>
                <div  className='md:flex  items-center gap-5'>
                    <a href='https://github.com/devin-lynch/proj-2-nba-app'>
                        <Image
                            src='/github.png'
                            alt='Github logo'
                            height='50'
                            width='50'
                        />
                    </a>
                    <a href='https://nba-app-devin-lynch.koyeb.app/'><img src='https://i.imgur.com/u698Ork.png' className='project transform transition duration-500 hover:scale-110' /></a>
                    <p><span className='italic text-3xl'><a href='https://nba-app-devin-lynch.koyeb.app/'>NBA App</a><br></br></span>An NBA App to browse players/teams and save favorites to add/edit comments on unique user profiles <br></br> Tech stack: Node, Express, PostgreSQL, Sequelize, EJS</p>
                </div>
            </div>
            
            <div className='text-center mt-10'>
                <div className='md:flex items-center gap-5'>
                    <p><span className='italic text-3xl'><a href='https://devin-lynch.github.io/PokeDOM-Battle/'>PokeDOM Battle</a><br></br></span>A Pokemon battle simulation using DOM manipulation <br></br> Tech stack: JavaScript, HTML, CSS</p>
                    <a href='https://devin-lynch.github.io/PokeDOM-Battle/'><img src='https://i.imgur.com/RDEDulR.png' className='project transform transition duration-500 hover:scale-110' /></a>
                    <a href='https://github.com/devin-lynch/PokeDOM-Battle'>
                        <Image
                            src='/github.png'
                            alt='Github logo'
                            height='50'
                            width='50'
                        />
                    </a>
                </div>
            </div>
            
        </div>
    )
}