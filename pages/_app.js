import '../styles/globals.css'
import { globalStyles } from '../styles/styles'

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default App
