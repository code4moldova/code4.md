import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { AboutUsHero } from '../blocks/about-us-hero'
import { OurValues } from '../blocks/our-values'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Despre noi / Code 4 Moldova</title>
      </Head>
      <Header />
      <AboutUsHero />
      <OurValues />
      <Footer />
    </React.Fragment>
  )
}
