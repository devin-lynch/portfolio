import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      {/* <Navbar /> */}
      <Navbar />
      {/* aside... */}
      <Component {...pageProps} />
      {/* footer */}
    </>
  )
}

export default MyApp
