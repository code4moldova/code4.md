import Link from 'next/link'
import React from 'react'
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { solutionsData } from '../data/solutions-data'

export function OtherSolutions() {
  return (
    <section className="bg-gray-200 py-5 md:py-16">
      <Container>
        <div className="mb-5 md:mb-10 text-center">vezi alte proiecte:</div>

        <Row>
          {solutionsData.map(solution => (
            <Column key={solution.title} className="mb-4 w-full md:w-1/4">
              <div className="h-full">
                <div className="relative" style={{ paddingBottom: '100%' }}>
                  <img className="absolute w-full h-full object-cover" src={solution.image} alt="" />
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <img className="w-42 h-42" src={solution.icon} alt="" />
                  </div>
                </div>
                <div className="py-4 font-bold text-lg">
                  <Link href={`/solutions/${solution.slug}`} passHref>
                    {solution.title}
                  </Link>
                </div>
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}
