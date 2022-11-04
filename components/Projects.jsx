import Image from 'next/image'

export default function Projects() {
    return (
        <div>
            <p>My Projects</p>

            <div>
                <a href='https://dreamplanner-dl.netlify.app/' target='_blank'>DreamPlanner</a>
                <a href='https://github.com/devin-lynch/dreamplanner-client' target='_blank'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>

            <div>
                <a href='https://silver-beignet-215e62.netlify.app/' target='_blank'>Pod-Cats</a>
                <a href='https://github.com/devin-lynch/pod-cats-client' target='_blank'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>

            <div>
                <a href='https://nba-app-devin-lynch.koyeb.app/' target='_blank'>NBA App</a>
                <a href='https://github.com/devin-lynch/proj-2-nba-app' target='_blank'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>
            
            <div>
                <a href='https://devin-lynch.github.io/PokeDOM-Battle/' target='_blank'>PokeDOM Battle</a>
                <a href='https://github.com/devin-lynch/PokeDOM-Battle' target='_blank'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>
            
        </div>
    )
}