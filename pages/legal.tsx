import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { Heading } from '../components/heading'
import { LegalBlock } from '../blocks/legal-block'

export default function Legal() {
  return (
    <React.Fragment>
      <Head>
        <title>Legal/ Code 4 Moldova</title>
      </Head>
      <Header />
      <LegalBlock />
      <Footer />
    </React.Fragment>
  )
}
