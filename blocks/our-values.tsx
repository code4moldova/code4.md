import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { Heading } from '../components/heading'
import civicGood from '../images/civic-good.png'
import openKnowledge from '../images/open-knowledge.svg'
import transparency from '../images/transparency.svg'
import innovation from '../images/innovation.png'

const values = [
  {
    image: civicGood,
    title: 'Civic good',
    description: 'Dezvoltăm pentru și împreună cu cetățenii.',
  },
  {
    image: openKnowledge,
    title: 'Open knowledge',
    description: 'Construim un ecosistem de cunoștințe transferabile.',
  },
  {
    image: transparency,
    title: 'Transparență',
    description: 'Suntem pentru nimic de ascuns.',
  },
  {
    image: innovation,
    title: 'Inovație',
    description: 'acem imposibilul posibil și nu ne limităm la tradițional.',
  },
]

export function OurValues() {
  return (
    <section className="bg-gray-200 pb-32 pt-32 lg:pt-56">
      <Container>
        <Heading tag="h1" className="text-center text-3xl mb-16">
          Valorile noastre
        </Heading>
        <Row>
          {values.map(value => (
            <Column key={value.title} className="w-full sm:w-1/2 mb-3 sm:mb-6 lg:w-1/4 ">
              <div className="bg-white h-full">
                <div className="relative" style={{ paddingBottom: '100%' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={value.image} alt={value.title} />
                  </div>
                </div>
                <div className="px-6 pb-8">
                  <h4 className="font-bold text-xl text-blue-700 text-center mb-6">{value.title}</h4>
                  <p className="text-center md:text-left text-lg text-gray-600">{value.description}</p>
                </div>
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}