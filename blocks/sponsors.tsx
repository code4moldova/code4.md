import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { Heading } from '../components/heading'
import politica from '../images/sponsors/politica.png'
import stisc from '../images/sponsors/stisc.png'
import diez from '../images/sponsors/diez.png'
import digitalpark from '../images/sponsors/digitalpark.png'

export function Sponsors() {
  return (
    <section className="bg-gray-100 py-5 md:py-16">
      <Container>

        <Heading tag="h1" className="text-3xl mb-5 md:mb-10 mx-10 md:mx-0">
          Susținatori
        </Heading>

        <Row>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src={politica} alt="" />
          </Column>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src={stisc} alt="" />
          </Column>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src={diez} alt="" />
          </Column>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src={digitalpark} alt="" />
          </Column>
        </Row>
      </Container>
    </section>
  )
}