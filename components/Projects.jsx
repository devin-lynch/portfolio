import Image from 'next/image'

export default function Projects() {
    return (
        <div>
            <p>My Projects</p>

            <div>
                <a href='https://dreamplanner-dl.netlify.app/'>DreamPlanner</a>
                <a href='https://github.com/devin-lynch/dreamplanner-client'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>

            <div>
                <a href='https://silver-beignet-215e62.netlify.app/'>Pod-Cats</a>
                <a href='https://github.com/devin-lynch/pod-cats-client'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>

            <div>
                <a href='https://nba-app-devin-lynch.koyeb.app/'>NBA App</a>
                <a href='https://github.com/devin-lynch/proj-2-nba-app'>
                    <Image
                        src='/githubwhite.png'
                        alt='Github logo'
                        height='50'
                        width='50'
                    />
                </a>
            </div>
            
            <div>
                <a href='https://devin-lynch.github.io/PokeDOM-Battle/'>PokeDOM Battle</a>
                <a href='https://github.com/devin-lynch/PokeDOM-Battle'>
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