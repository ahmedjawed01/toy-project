import { Fragment } from 'react';
import Head from 'next/head'
import { Line } from 'react-chartjs-2';

// components
import Sidebar from '../../src/components/Sidebar'
import Container from '../../src/components/Container'

// styles
import styles from '../../styles/Home.module.css'

export default function CoinDetails({ id, coins, line }) {
    return (
        <div className={styles.container}>
            <Sidebar items={coins} />
            <Head>
                <title>Coin Detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <main className={styles.main}>
                    {line.data.labels.length ?
                        <Fragment>
                            <Line
                                data={line.data}
                                options={line.options}
                            />

                            <h1 className={styles.title}>Coin Tracker</h1>
                            <p className={styles.description}>One Platform. Many Coins!</p>
                        </Fragment>
                        :
                        <Fragment>
                            <p className={styles.description}>No data avaiable for {id}</p>
                            <h1 className={styles.title}>Coin Tracker</h1>
                            <p className={styles.description}>One Platform. Many Coins!</p>
                        </Fragment>
                    }
                </main>
            </Container>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/list')
    const coins = await res.json()

    const paths = coins.map(coin => `/coins/${coin.id}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let res = await fetch('https://api.coingecko.com/api/v3/coins/list')
    const coins = await res.json()

    res = await fetch(`https://api.coingecko.com/api/v3/simple/price/?ids=${params.id}&vs_currencies=aed,eur,usd&include_24hr_vol=true`)
    const coinDetails = await res.json()

    const prices = []
    const volumes = []
    const labels = []
    for (const key in coinDetails[params.id]) {
        if (key.includes('vol')) {
            volumes.push(coinDetails[params.id][key])
        } else {
            prices.push(coinDetails[params.id][key])
            labels.push(key)
        }
    }

    const datasets = [
        {
            label: 'Price',
            backgroundColor: '#00f166',
            data: prices
        },
        {
            label: 'Volume',
            backgroundColor: '#ffa1eb',
            data: volumes
        }
    ];

    const line = {
        data: {
            labels,
            datasets,
        },
        options: {
            animation: {
                duration: 0
            },
            responsiveAnimationDuration: 0,
            responsive: true,
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: params.id,
            },
            tooltips: {
                intersect: false,
                mode: 'nearest',
            },
            hover: {
                mode: 'index',
                animationDuration: 0
            },
            scales: {
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Currencies',
                        },
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Prices & Volumes',
                        },
                        gridLines: {
                            display: false,
                        },
                    },
                ],
            },
        },
    }

    return {
        props: {
            id: params.id,
            coins,
            coinDetails,
            line
        },
    }
}