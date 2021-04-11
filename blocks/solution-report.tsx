import React from 'react'
import { Heading } from '../components/heading'
import { Container } from '../components/container'

export function SolutionReport({ report }: { report: string }) {
  return (
    <Container className="bg-gray-100 pb-5 md:pb-12 px-5 md:px-12">
      <Heading tag="h2" className="text-2xl mb-10">
        Raport
      </Heading>
      <div>
        <iframe
          className="scribd_iframe_embed"
          title="Suport Grupurilor Vulnerabile"
          src={report}
          data-auto-height="true"
          data-aspect-ratio="0.7066666666666667"
          scrolling="no"
          width="100%"
          height="600"
          frameBorder="0"
        />
      </div>
    </Container>
  )
}
