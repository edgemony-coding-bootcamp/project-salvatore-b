import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardAlbum from '../components/CardAlbum'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edgify</title>
        <meta name="description" content="Edgify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
      <h1>edgify</h1>
      <CardAlbum/>
      </main>



      <footer className={styles.footer}>

      </footer>





    </div>
  )
}
