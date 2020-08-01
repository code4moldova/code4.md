import Link from 'next/link'
import React from 'react'
import { Button } from '../components/button'
import { Container } from '../components/container'
import { Heading } from '../components/heading'

export function BeWithUs() {
  return (
    <section className="py-3 md:py-24">
      <Container className="flex justify-center">
        <div className="bg-blue-200 py-16 px-24 text-center">
          <Heading tag="h3" className="text-xl mb-6">
            Fii parte din comunitatea noastră
          </Heading>
          <Link href="/get-involved" passHref>
            <Button tag="a" buttonType="primary-outline" className="mr-2">
              Implică-te
            </Button>
          </Link>
          <Link href="/donate" passHref>
            <Button tag="a" buttonType="primary" className="ml-2">
              Donează
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
