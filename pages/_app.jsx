import '../styles/globals.css'
import Navbar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      <Navbar />
      {/* aside... */}
      <Component {...pageProps} />
      {/* footer */}
    </>
  )
}

export default MyApp
