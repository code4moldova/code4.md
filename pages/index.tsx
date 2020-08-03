import React from 'react'
import { Solutions } from '../blocks/solutions'
import { Header } from '../blocks/header'
import { Hero } from '../blocks/hero'
import { GetInvolved } from '../blocks/get-involved'
import { Sponsors } from '../blocks/sponsors'
import { Footer } from '../blocks/footer'
import Head from 'next/head'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Code 4 Moldova</title>
      </Head>
      <Header />
      <Hero />
      <Solutions />
      <GetInvolved />
      <Sponsors />
      <Footer />
    </React.Fragment>
  )
}
