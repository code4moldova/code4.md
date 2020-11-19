import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { Heading } from '../components/heading'
import { partnersData } from '../data/partners-data'

export function Partners() {
  return (
    <section>
      <Container>
        <Row>
          <Heading tag="h1" className="text-3xl mb-5 md:mb-10 mx-10 md:mx-0">
            Parteneri
          </Heading>
        </Row>

        <Row>
          {partnersData.map(partner => (
            <Column key={partner.name} className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
              <a href={partner.website} title={partner.name} target="_blank">
                <img className="w-full" src={partner.image} alt={partner.name} />
              </a>
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}
