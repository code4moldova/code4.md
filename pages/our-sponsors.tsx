import React from 'react'
import { Header } from '../blocks/header'
import { Sponsors } from '../blocks/sponsors'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { BeWithUs } from '../blocks/be-with-us'

export default function OurSponsors() {
  return (
    <React.Fragment>
      <Head>
        <title>Sponsori / Code 4 Moldova Sponsors</title>
      </Head>
      <Header />
      <Sponsors />
      <BeWithUs />
      <Footer />
    </React.Fragment>
  )
}
