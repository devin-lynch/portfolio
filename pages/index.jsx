import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Devin's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* useRef + scrolling */}
      <h1>My Portfolio</h1>

      <About />

      <Projects />

      <Contact />
    </div>
  )
}
