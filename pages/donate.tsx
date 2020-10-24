import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { Container } from '../components/container'
import donateImage from '../images/donate-hero.svg'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import { Column } from '../components/column'

export default function Donate() {
  return (
    <React.Fragment>
      <Head>
        <title>Donează / Code 4 Moldova</title>
      </Head>
      <Header />
      <section className="bg-yellow-200 py-24">
        <Container className="mb-8">
          <img src={donateImage} alt="" className="w-full" />
          <div className="bg-white py-16 px-12">
            <Heading tag="h1" className="text-4xl mb-6">
              Investește în comunitatea ta
            </Heading>
            <p className="text-gray-800">
              În fiecare zi, zeci dintre prietenii și colegii tăi lucrează pentru a construi instrumente digitale utile
              pentru a ne face viața mai ușoară și pentru a aduce Moldova mai aproape de progresul tehnologic. Ajută-i
              să își continue munca.
            </p>

            <svg viewBox="0 0 1000 1" className="text-blue-300 my-16" stroke="currentColor">
              <line x1="0" y1="0" x2="1000" y2="0" strokeDasharray="20" />
            </svg>

            <Row>
              <Column className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <Heading tag="h3" className="text-2xl mb-6">
                  Banul tău face schimbare
                </Heading>
                <p className="text-gray-800 xl:w-4/5">
                  Code for Moldova se bazează pe voluntariat, însă activitatea noastră implică anumite cheltuieli. Tu
                  poți să ne ajuți să acoperim următoarele costuri:
                </p>
              </Column>
              <Column className="w-full lg:w-1/2">
                <Row className="text-center">
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-indigo-200 mb-3" style={{ paddingBottom: '100%' }} />
                    <p className="text-sm text-indigo-500">Întreținerea platformei</p>
                  </Column>
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-purple-200 mb-3" style={{ paddingBottom: '100%' }} />
                    <p className="text-sm text-purple-500">Domenii web și hosting</p>
                  </Column>
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-blue-200 mb-3" style={{ paddingBottom: '100%' }} />
                    <p className="text-sm text-blue-500">Administrare</p>
                  </Column>
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-pink-200 mb-3" style={{ paddingBottom: '100%' }} />
                    <p className="text-sm text-pink-500">Evenimente</p>
                  </Column>
                </Row>
              </Column>
            </Row>
          </div>
        </Container>
        <Container className="mb-20">
          <Row>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white p-12 border-t-8 border-blue-500 h-full">
                <h2 className="text-2xl font-bold text-blue-500 mb-8">Donează prin transfer bancar</h2>
                <p className="text-gray-800 mb-8">
                  Rechizite bancare pentru transferuri în <strong>MDL</strong>:
                </p>
                <dl>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Denumirea Clientului:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      AO "CODE FOR MOLDOVA"s
                    </dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">IBAN (cont curent):</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      MD56ML000000002251967325
                    </dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Codul fiscal:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">1020620002933</dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Denumirea Bancii:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      BC “Moldindconbank” SA suc. “Vasile Alecsandri”
                    </dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Codul bancar:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">MOLDMD2X367</dd>
                  </div>
                </dl>
              </div>
            </Column>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white p-12 border-t-8 border-blue-500 h-full">
                <h2 className="text-2xl font-bold text-blue-500 mb-8">Fundraising</h2>
                <dl>                  
                  <div className="mb-8 grid grid-cols-3 gap-4">
                     <dt>
                      <img width=500 height=200 src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png" alt="paypal" />
                    </dt>
                    <dd className="col-span-2">
                      <a href="https://paypal.me/code4md?locale.x=en_US" className="underline text-blue-500 mb-4 inline-block">
                        Donează prin PayPal
                      </a>
                      <p>Sustine Code4Moldova pentru a schimba Moldova spre bine.</p>
                    </dd>
                  </div>
                </dl>
              </div>
            </Column>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}
