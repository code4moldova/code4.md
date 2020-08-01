import Link from 'next/link'
import React from 'react'
import { Button } from '../components/button'
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import heroImage from '../images/hero.jpeg'

export function Hero() {
  return (
    <section className="bg-white relative">
      <Container>
        <Row>
          <Column className="z-10 lg:w-1/2 flex flex-col justify-center my-12">
            <Heading tag="h1" className="text-4xl mb-10">
              Soluții IT pro-bono în Moldova. No way?
              <br />
              <span className="text-blue-700">There is one!</span>
            </Heading>
            <p className="mb-12 xl:mr-32">
              <b>Code for Moldova</b> este o asociație obștească apolitică, neguvernamentală și non-profit. Prima
              Asociație
              Civic-Tech din Moldova, care vine să soluționeze probleme societății prin soft-uri și platforme.
            </p>

            <div>
              <Link href="/get-involved" passHref>
                <Button tag="a" buttonType="primary-outline" className="mr-1">
                  Implică-te
                </Button>
              </Link>
              <Link href="/donate" passHref>
                <Button tag="a" buttonType="primary" className="ml-1">
                  Donează
                </Button>
              </Link>
            </div>
          </Column>
          <Column className="z-0 lg:w-1/2 lg:my-12">
            <img
              src={heroImage}
              className="absolute lg:static inset-0 w-full h-full object-cover"
              alt="typing on keyboard" />
            <div className="absolute lg:hidden inset-0 bg-white opacity-75" />
          </Column>
        </Row>
      </Container>
    </section>
  )
}
