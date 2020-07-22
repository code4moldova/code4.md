import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'

export function Partners() {
  return (
    <section className="bg-gray-100 py-5 md:py-16">
      <Container>

        <h1 className="text-3xl mb-5 md:mb-10 mx-10 md:mx-0" style={{ fontFamily: 'Space Mono' }}>Parteneri</h1>

        <Row>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </Column>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </Column>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </Column>
          <Column className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </Column>
        </Row>
      </Container>
    </section>
  )
}