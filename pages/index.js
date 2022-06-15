import Head from 'next/head'
import Welcome from '@components/Welcome'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container is-fullhd is-dark">
      <Head>
        <title>BranDaniMB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <main>
        <Welcome/>
      </main>

      <Footer />
    </div>
  )
}
