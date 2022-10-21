// import build in link from next
import Link from 'next/Link'

export default function NavBar() {
    return (
        <nav>
            <Link href='/'>Home</Link>
            
            <Link href='/about'>About Me</Link>
        </nav>
    )
}