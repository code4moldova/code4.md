import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { Heading } from '../components/heading'
import { Volunteers } from '../blocks/volunteers'
import { Staff } from '../blocks/staff'
import { BeWithUs } from '../blocks/be-with-us'

export default function Community() {
  return (
    <React.Fragment>
      <Head>
        <title>Comunitate / Code 4 Moldova</title>
      </Head>
      <Header />
      <Staff />
      <Volunteers />
      <BeWithUs />
      <Footer />
    </React.Fragment>
  )
}
