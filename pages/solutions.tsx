import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { BeWithUs } from '../blocks/be-with-us'
import clock from '../images/clock.png'
import donateHand from '../images/donate-hand.png'
import Link from 'next/link'
import partner from '../images/partner.png'
import covidCell from '../images/covid-cell.png'
import girl from '../images/girl-pressing-door-buttons.jpeg'

export default function Solutions() {
  return (
    <React.Fragment>
      <Head>
        <title>Implică-te / Code 4 Moldova</title>
      </Head>
      <Header />
      <section className="pt-12 sm:pt-32 pb-56">
        <Container className="mb-20 sm:mb-32">
          <Heading tag="h1" className="text-4xl text-center mb-12">
            Soluții IT
          </Heading>
          <p className="w-full sm:w-3/5 xl:w-3/5 mx-auto">
            Aici poți vedea toate aplicațiile Code for Moldova și la ce etapă se află de implementare.
            Aplicațiile Code for Moldova sunt fie aplicații proprii, fie aplicații dezvoltate pentru ONG-uri sau
            instituții publice.
          </p>
        </Container>
        <Container className="xl:mb-8">
          <Row>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white border-t-8  h-full flex flex-col">
                <div className="relative" style={{ paddingBottom: '75%' }}>
                    <img
                      className="absolute w-full h-full object-cover"
                      src={covidCell}
                      alt="Coronvirus image"
                    />
                    <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                      <h2
                        className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right"
                      >
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
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white border-t-8 h-full flex flex-col">
                   <div className="bg-white h-full">
                      <div className="relative" style={{ paddingBottom: '75%' }}>
                        <img
                          className="absolute w-full h-full object-cover"
                          src={girl}
                          alt="Girl pressing door buttons"
                        />
                        <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                          <h2
                            className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right"
                          >
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
              </div>
            </Column>
          </Row>
        </Container>

      </section>
      <BeWithUs />
      <Footer />
    </React.Fragment>
  )
}
