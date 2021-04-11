import Link from 'next/link'
import React from 'react'
import { Button } from '../components/button'
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import { Solution as SolutionType } from '../types/solution'

export function Solutions({ solutions }: { solutions: SolutionType[] }) {
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
          {solutions.map(solution => (
            <Column key={solution.title} className="mb-4 w-full md:w-1/3">
              <div className="bg-white h-full">
                <div className="relative" style={{ paddingBottom: '75%' }}>
                  <img className="absolute w-full h-full object-cover" src={solution.image} alt="" />
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <img className="w-42 h-42" src={solution.icon} alt="" />
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-lg mb-2">{solution.title}</div>
                  <p className="text-gray-700 text-base">{solution.description}</p>
                  <div className="mt-2">
                    <Link href={`/solutions/${solution.slug}`} passHref>
                      <a className="hover:underline text-blue-500">Detalii</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}
