import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { Heading } from '../components/heading'

export function Partners({ sponsors }: any) {
  return (
    <section>
      <Container>
        <Row>
          <Heading tag="h1" className="text-3xl mb-5 md:mb-10 mx-10 md:mx-0">
            Parteneri
          </Heading>
        </Row>

        <Row>
          {sponsors.map((sponsor: any) => (
            <Column key={sponsor.name} className="mb-4 w-full md:w-1/4 mx-10 md:mx-0">
              <a href={sponsor.website} title={sponsor.name} target="_blank">
                <img className="w-full" src={sponsor.image} alt={sponsor.name} />
              </a>
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}
