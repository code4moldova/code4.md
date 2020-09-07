import Link from 'next/link'
import React from 'react'
import { Button } from '../components/button'
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import covidCell from '../images/covid-cell.png'
import girl from '../images/girl-pressing-door-buttons.jpeg'

export function Solutions() {
  return (
    <section className="bg-gray-100 py-5 md:py-16">
      <Container>
        <div className="flex justify-between items-center mb-5 md:mb-10">
          <Heading tag="h1" className="text-3xl">
            Soluții IT
          </Heading>
          <Link href="/solutions" passHref>
            <Button buttonType="primary-outline">
              <a>Vezi toate</a>
            </Button>
          </Link>
        </div>

        <Row>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="bg-white h-full">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <img className="absolute w-full h-full object-cover" src={girl} alt="Girl pressing door buttons" />
                <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                  <h2 className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right">
                    Inițiativa
                    <br />
                    <span className="text-yellow-400">Împreună</span>
                    <br />
                    <span className="text-yellow-400">împotriva</span>
                    <br />
                    <span className="text-yellow-400">COVID-19</span>
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">voluntar.md</div>
                <p className="text-gray-700 text-base">
                  Platforma care conectează persoanele care au nevoie de ajutor cu cele care doresc să ajute.
                </p>
              </div>
            </div>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="bg-white h-full">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <img className="absolute w-full h-full object-cover" src={covidCell} alt="Coronvirus image" />
                <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                  <h2 className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right">
                    Centru de
                    <br />
                    Informare
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">info.c19.md</div>
                <p className="text-gray-700 text-base">
                  Portal informativ cu privire la situația creată de COVID-19 în Moldova.
                </p>
              </div>
            </div>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="bg-white h-full">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <img className="absolute w-full h-full object-cover" src={girl} alt="Sunset in the mountains" />
                <div className="absolute w-full h-full bg-gray-700 opacity-75" />
                <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                  <h2 className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right">
                    Inițiativa
                    <br />
                    <span className="text-yellow-400">Împreună</span>
                    <br />
                    <span className="text-yellow-400">împotriva</span>
                    <br />
                    <span className="text-yellow-400">COVID-19</span>
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">voluntar.md</div>
                <p className="text-gray-700 text-base">
                  Platforma care conectează persoanele care au nevoie de ajutor cu cele care doresc să ajute.
                </p>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  )
}
