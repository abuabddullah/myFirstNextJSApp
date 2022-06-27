import Shared from '../components/shared/Shared'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Shared>
      <Component {...pageProps} />
    </Shared>
  )
}

export default MyApp
