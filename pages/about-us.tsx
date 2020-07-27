import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { AboutUsHero } from '../blocks/about-us-hero'
import { OurValues } from '../blocks/our-values'
import { Heading } from '../components/heading'
import { OurActivity } from '../blocks/our-activity'
import { Staff } from '../blocks/staff'
import { BeWithUs } from '../blocks/be-with-us'

export default function AboutUs() {
  return (
    <React.Fragment>
      <Head>
        <title>Despre noi / Code 4 Moldova</title>
      </Head>
      <Header />
      <AboutUsHero />
      <section className="bg-yellow-400 lg:h-0 flex items-center justify-center">
        <div className="bg-yellow-400 text-center p-16">
          <Heading tag="h1" className="text-3xl">Misiunea noastră</Heading>
          <p>Să creem o comunitatea activă care va oferi suport în digitalizarea Moldovei.</p>
        </div>
      </section>
      <OurValues />
      <OurActivity />
      <Staff />
      <BeWithUs />
      <Footer />
    </React.Fragment>
  )
}
