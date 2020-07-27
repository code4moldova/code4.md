import React from 'react'
import { Header } from '../blocks/header'
import { Partners } from '../blocks/partners'
import { Sponsors } from '../blocks/sponsors'
import { Footer } from '../blocks/footer'
import Head from 'next/head'

export default function OurSponsors() {
  return (
    <React.Fragment>
      <Head>
        <title>Sponsori / Code 4 Moldova Sponsors</title>
      </Head>
      <Header />
      <Partners />
      <Sponsors />
      <Footer />
    </React.Fragment>
  )
}
