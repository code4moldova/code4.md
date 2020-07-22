import React from 'react'
import { Solutions } from '../blocks/solutions'
import { Header } from '../blocks/header'
import { Hero } from '../blocks/hero'
import { GetInvolved } from '../blocks/get-involved'
import { Partners } from '../blocks/partners'
import { Footer } from '../blocks/footer'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Solutions />
      <GetInvolved />
      <Partners />
      <Footer />
    </React.Fragment>
  )
}
