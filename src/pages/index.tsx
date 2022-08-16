
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
   
      <section className={styles.container}>
        <main className={styles.content}>
          <span>🖐 Hey, Welcome</span>
          <h1>New about the <span>React</span> World</h1>
          <p>Get access to all the publications for<br /> 
          <span> $9.90 month</span> </p>

          <SubscribeButton/>
        </main>
        <img src="/images/avatar.svg" alt="girl lerning" />

      </section>
    </>

  )
}
