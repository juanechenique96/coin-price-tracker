import Head from 'next/head'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CoinsList from './components/CoinList'
import Footer from './components/Footer'

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Coin Tracker | Home</title>
      </Head>
      <body>

        <Navbar />
        <HeroSection />
        <CoinsList data={data} />
        <Footer />

        <style jsx global>{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Poppins', sans-serif;
            }
            li {
              list-style-type: none;
            }

            a {
              text-decoration: none;
            }
            
            body {
              overflow-x: hidden;
              background-color: #F4F4F8;
            }
          `}
        </style>
      </body>
    </>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
  `)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }
  }
}