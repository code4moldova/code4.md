import React from 'react'
import { Solutions } from '../blocks/solutions'
import { Header } from '../blocks/header'
import { GetInvolved } from '../blocks/get-involved'
import { Partners } from '../blocks/partners'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { AboutUsHero } from '../blocks/about-us-hero'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Despre noi / Code 4 Moldova</title>
      </Head>
      <Header />
      <AboutUsHero />
      <Footer />
    </React.Fragment>
  )
}
