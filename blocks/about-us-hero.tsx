import React from 'react'
import { Container } from '../components/container'
import heroImage from '../images/about-us.jpeg'

export function AboutUsHero() {
  return (
    <section className="py-16 lg:py-40 text-white bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
      <Container>
        <h1 className="text-4xl mb-5 md:mb-10" style={{ fontFamily: 'Space Mono' }}>
          Noi suntem Code4Moldova
        </h1>
        <p className="md:w-1/2 lg:w-2/5">
          Noi suntem o comunitate de tineri profesioniști și entuziaști care dezvoltă pro-bono soluţii IT cu scopul de a
          rezolva problemele societăţii.
        </p>
      </Container>
    </section>
  )
}