import Layout from '../components/Layout'

import '../styles/sass/styles.scss'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
