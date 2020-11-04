import Head from 'next/head'
import React from 'react'
import { BeWithUs } from '../blocks/be-with-us'
import { Footer } from '../blocks/footer'
import { Header } from '../blocks/header'
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import { solutionsData } from '../data/solutions-data'

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
            Aici poți vedea toate aplicațiile Code for Moldova și la ce etapă se află de implementare. Aplicațiile Code
            for Moldova sunt fie aplicații proprii, fie aplicații dezvoltate pentru ONG-uri sau instituții publice.
          </p>
        </Container>
        <Container className="xl:mb-8">
          <Row>
            {solutionsData.map(solution => (
              <Column key={solution.title} className="w-full lg:w-1/2 mb-8">
                <div className="bg-white  h-full flex flex-col">
                  <div className="relative" style={{ paddingBottom: '75%' }}>
                    <img className="absolute w-full h-full object-cover" src={solution.image} alt="" />
                    <div className="absolute w-full h-full flex items-center justify-center">
                      <img className="w-56 h-56" src={solution.icon} alt="" />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2">{solution.title}</div>
                    <p className="text-gray-700 text-base">{solution.description}</p>
                    <div className="mt-2">
                      {solution.website ? (
                        <a href={solution.website} target="_blank" className="hover:underline text-blue-500">
                          Vizitează
                        </a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </Column>
            ))}
          </Row>
        </Container>
      </section>
      <BeWithUs />
      <Footer />
    </React.Fragment>
  )
}
