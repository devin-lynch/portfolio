// import build in link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='scroll-smooth'>
            {/* <Link href='/'>Home</Link>{' | '} */}

            <Link href='#about'>About Me</Link>{' | '}

            <Link href='#skills'>Skills</Link>{' | '}

            <Link href='#projects'>Projects</Link>{' | '}

            <Link href='#contact'>Contact</Link>
        </nav>
    )
}