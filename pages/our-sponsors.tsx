import React from 'react'
import { Header } from '../blocks/header'
import { Sponsors } from '../blocks/sponsors'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { BeWithUs } from '../blocks/be-with-us'
import { GetStaticProps } from 'next'
import { getSponsors } from '../lib/api'

export default function OurSponsors({ sponsors }: any) {
  return (
    <React.Fragment>
      <Head>
        <title>Sponsori / Code 4 Moldova Sponsors</title>
      </Head>
      <Header />
      <Sponsors sponsors={sponsors} />
      <BeWithUs />
      <Footer />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {
    sponsors: getSponsors(),
  },
})
