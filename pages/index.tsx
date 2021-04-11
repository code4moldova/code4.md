import React from 'react'
import { Solutions } from '../blocks/solutions'
import { Header } from '../blocks/header'
import { Hero } from '../blocks/hero'
import { GetInvolved } from '../blocks/get-involved'
import { Sponsors } from '../blocks/sponsors'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllSponsors } from '../lib/api'
import { solutionsData } from '../data/solutions-data'

export default function Home({ sponsors }: any) {
  return (
    <React.Fragment>
      <Head>
        <title>Code 4 Moldova</title>
      </Head>
      <Header />
      <Hero />
      <Solutions />
      <GetInvolved />
      <Sponsors sponsors={sponsors} />
      <Footer />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {
    sponsors: getAllSponsors(),
  },
})
