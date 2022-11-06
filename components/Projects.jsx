import Image from 'next/image'

export default function Projects() {
    return (
        <div className='flex flex-col items-center'>
            <p className='mt-6'>My Projects</p>

            <div className='text-center mt-3'>
                <p className='italic text-3xl'><a href='https://dreamplanner-dl.netlify.app/'>DreamPlanner</a></p>
                <a href='https://dreamplanner-dl.netlify.app/'><img src='https://i.imgur.com/eyliRfW.png' className='project' /></a>
                <a href='https://github.com/devin-lynch/dreamplanner-client'>
                    <Image
                        src='/github.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>

            <div className='text-center mt-5'>
                <p className='italic text-3xl'><a href='https://silver-beignet-215e62.netlify.app/'>Pod-Cats</a></p>
                <a href='https://silver-beignet-215e62.netlify.app/'><img src='https://i.imgur.com/ZMEAjd0.png' className='project' /></a>
                <a href='https://github.com/devin-lynch/pod-cats-client'>
                    <Image
                        src='/github.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>

            <div className='text-center mt-5'>
                <p className='italic text-3xl'><a href='https://nba-app-devin-lynch.koyeb.app/'>NBA App</a></p>
                <a href='https://nba-app-devin-lynch.koyeb.app/'><img src='https://i.imgur.com/u698Ork.png' className='project' /></a>
                <a href='https://github.com/devin-lynch/proj-2-nba-app'>
                    <Image
                        src='/github.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>
            
            <div className='text-center mt-5'>
                <p className='italic text-3xl'><a href='https://devin-lynch.github.io/PokeDOM-Battle/'>PokeDOM Battle</a></p>
                <a href='https://devin-lynch.github.io/PokeDOM-Battle/'><img src='https://i.imgur.com/RDEDulR.png' className='project' /></a>
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
    )
}