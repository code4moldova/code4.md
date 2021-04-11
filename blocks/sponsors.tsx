import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { Heading } from '../components/heading'

export function Sponsors({ sponsors }: any) {
  return (
    <section className="bg-gray-100 py-5 md:py-16">
      <Container>
        <Heading tag="h1" className="text-3xl mb-5 md:mb-10 mx-10 md:mx-0">
          Susținatori
        </Heading>

        <Row>
          {sponsors.map((sponsor: any, index: number) => (
            <Column key={index} className="mb-4 w-full md:w-1/5 mx-10 md:mx-0">
              <img className="w-full" src={sponsor.image} alt="" />
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}
