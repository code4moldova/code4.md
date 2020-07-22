import React from 'react'
import heroImage from '../images/hero-image.jpeg'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'

export function Hero() {
  return (
    <section className="bg-white relative">
      <Container>
        <Row>
          <Column className="z-10 lg:w-1/2 flex flex-col justify-center my-12">
            <h1 className="text-4xl mb-10" style={{ fontFamily: 'Space Mono' }}>
              Soluții IT pro-bono în Moldova. No way?
              <br />
              <span className="text-blue-700">There is one!</span>
            </h1>
            <p className="mb-12 xl:mr-32">
              <b>Code for Moldova</b> este o asociație obștească apolitică, neguvernamentală și non-profit. Prima
              Asociație
              Civic-Tech din Moldova, care vine să soluționeze probleme societății prin soft-uri și platforme.
            </p>

            <div>
              <button
                className="mr-3 border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2"
              >
                Vezi toate
              </button>

              <button className="border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2">
                Vezi toate
              </button>
            </div>
          </Column>
          <Column className="z-0 lg:w-1/2 lg:my-12">
            <img src={heroImage} className="absolute lg:static inset-0 w-full h-full object-cover" alt="typing on keyboard" />
            <div className="absolute lg:hidden inset-0 bg-white opacity-75" />
          </Column>
        </Row>
      </Container>
    </section>
  )
}