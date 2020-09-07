import { Container } from '../components/container'
import { Heading } from '../components/heading'
import React from 'react'
import { Row } from '../components/row'
import { Column } from '../components/column'
import civicGood from '../images/civic-good.svg'
import heart from '../images/heart.svg'

export function OurActivity() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Heading tag="h1" className="text-center md:text-left text-3xl mb-20">
          Activitatea noastră
        </Heading>

        <Row>
          <Column className="w-full lg:w-1/2">
            <div className="h-full p-12 hover:bg-blue-200 transition-colors ease-in-out duration-300">
              <img src={civicGood} alt="civic good" className="mb-8" />
              <a href="#civic-labs">
                <Heading
                  tag="h1"
                  className="text-3xl inline-block mb-10 border-current border-b-2"
                  style={{ color: '#024BBB' }}>
                  Civic Labs
                </Heading>
              </a>
              <p className="text-gray-800">
                Membrii echipei Civic Labs efectuează cercetări în diverse domenii, depistează probleme și generează
                soluții digitale în formă de prototipuri. Aici au loc primele etape a dezvoltării soluțiilor
                Code4Moldova.
              </p>
            </div>
          </Column>
          <Column className="w-full lg:w-1/2">
            <div className="h-full p-12 hover:bg-yellow-200 transition-colors ease-in-out duration-300">
              <img src={heart} alt="tech for social goods" className="mb-8" />
              <a href="#tech-for-social-goods">
                <Heading
                  tag="h1"
                  className="text-3xl inline-block mb-10 border-current border-b-2"
                  style={{ color: '#6E662B' }}>
                  Tech For Social Good
                </Heading>
              </a>
              <p className="text-gray-800">
                Programul în care fiecare persoană cu abilități tehnice își poate aduce aportul în dezvoltarea
                aplicațiilor civice, participând la evenimentele organizate în fiecare lună Hack Days. O zi întreagă de
                tech work & tech talk. Evenimentele se petrec în Chișinău și online via Google Meet și Slack.
              </p>
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  )
}
