import React from 'react'
import { Container } from '../components/container'
import heroImage from '../images/about-us.jpeg'
import { Heading } from '../components/heading'

export function AboutUsHero() {
  return (
    <section className="py-16 lg:pt-40 lg:pb-56 text-white bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
      <Container>
        <Heading tag="h1" className="text-4xl mb-5 md:mb-10">
          Noi suntem Code4Moldova
        </Heading>
        <p className="md:w-1/2 lg:w-2/5">
          Noi suntem o comunitate de tineri profesioniști și entuziaști care dezvoltă pro-bono soluţii IT cu scopul de a
          rezolva problemele societăţii.
        </p>
      </Container>
    </section>
  )
}
