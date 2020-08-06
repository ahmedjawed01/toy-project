import Head from 'next/head'
import styles from '../styles/Home.module.css'

// components
import Sidebar from '../src/components/Sidebar'
import Container from '../src/components/Container'

export default function Home({ coins }) {
  return (
    <div className={styles.container}>
      <Sidebar items={coins} />
      <Head>
        <title>Toy Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main className={styles.main}>
          <h1 className={styles.title}>Coin Tracker</h1>

          <p className={styles.description}>One Platform. Many Coins!</p>
        </main>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/list')
  const coins = await res.json()

  return {
    props: {
      coins,
    },
  }
}