import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Carousel from '../components/Carousel'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carousel with swiper</title>
        <meta name="description" content="swiper carousel navgation outside div" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Carousel />
    </div>
  )
}

export default Home
