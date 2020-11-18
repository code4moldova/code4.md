import Link from 'next/link'
import React from 'react'
import { Button } from '../components/button'
import { Container } from '../components/container'
import { Heading } from '../components/heading'

type Props = React.PropsWithChildren<{
  sectionClass?: string
}>

export function BeWithUs({ sectionClass = 'py-3 md:py-24' }: Props) {
  return (
    <section className={sectionClass}>
      <Container className="flex justify-center">
        <div className="bg-blue-200 py-16 px-3 sm:px-24 text-center">
          <Heading tag="h3" className="text-xl mb-6">
            Fii parte din comunitatea noastră
          </Heading>
          <Link href="/get-involved" passHref>
            <Button buttonType="primary-outline">
              <a className="mr-2">Implică-te</a>
            </Button>
          </Link>
          <Link href="/donate" passHref>
            <Button buttonType="primary">
              <a className="ml-2">Donează</a>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
