import {GetStaticProps} from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product : {
    priceId: string,
    amount: string
  }
}

export default function Home({product}:HomeProps) {
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
          <span> {product.amount} month </span> </p>

          <SubscribeButton/>
        </main>
        <img src="/images/avatar.svg" alt="girl lerning" />

      </section>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1LWMwHF5a3idtMTjOM35gGgD', {
    expand :['product'],
  }) 

  const product = {
    productId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24horas
  }
}