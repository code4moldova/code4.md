import React from 'react'
import { Solutions } from '../blocks/solutions'
import { Header } from '../blocks/header'
import { Hero } from '../blocks/hero'
import { GetInvolved } from '../blocks/get-involved'
import { Sponsors } from '../blocks/sponsors'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getApplications, getSponsors } from '../lib/api'

export default function Home({ sponsors, solutions }: any) {
  return (
    <React.Fragment>
      <Head>
        <title>Code 4 Moldova</title>
      </Head>
      <Header />
      <Hero />
      <Solutions solutions={solutions} />
      <GetInvolved />
      <Sponsors sponsors={sponsors} />
      <Footer />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {
    sponsors: getSponsors(),
    solutions: getApplications(),
  },
})
