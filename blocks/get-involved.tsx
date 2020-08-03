import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'
import Link from 'next/link'
import voluntary from '../images/voluntary.png'
import donate from '../images/donate.png'
import partner from '../images/partner.png'
import { Heading } from '../components/heading'

export function GetInvolved() {
  return (
    <section className="py-5 md:py-16">
      <Container>

        <Heading tag="h1" className="text-3xl mb-5 md:mb-10">
          Implică-te
        </Heading>

        <Row>
          <Column className="mb-4 w-full md:w-1/3">
            <Link href="/get-involved">
                <a className="border-4 border-blue-500 p-8 h-full block">
                  <div className="flex flex-col lg:flex-row items-center mb-6">
                    <img className="w-20 mb-4 lg:mb-0" src={voluntary} alt="" />
                    <h2 className="text-3xl font-medium text-blue-500 lg:ml-6">Fii voluntar!</h2>
                  </div>
                  <p>
                    Te poți implica prin cunoștințele și aptitudinile tale de programator, cercetare sau comunicare în
                    crearea
                    aplicațiilor civice, ce vor face Moldova țara pe care ni-o dorim cu toții!
                  </p>
                </a>
            </Link>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <Link href="/donate">
                <a className="border-4 border-indigo-700 p-8 h-full block">
                  <div className="flex flex-col lg:flex-row items-center mb-6">
                    <img className="w-20 mb-4 lg:mb-0" src={donate} alt="" />
                    <h2 className="text-3xl font-medium text-indigo-700 lg:ml-6">Donează!</h2>
                  </div>
                  <p>
                    Dacă vrei să susții cercetările desfășurate și aplicațiile pe care le implementăm poți veni cu o
                    contribuţie, oricât de mică a fi este utilă şi mult apreciată.
                  </p>
                </a>
            </Link>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <Link href="/get-involved">
                <a className="border-4 border-blue-900 p-8 h-full block">
                  <div className="flex flex-col lg:flex-row items-center mb-6">
                    <img className="w-20 mb-4 lg:mb-0" src={partner} alt="" />
                    <h2 className="text-3xl font-medium text-blue-900 lg:ml-6">Devino partener!</h2>
                  </div>
                  <p>
                    Devino una dintre companiile care încurajează voluntariatul în IT și alătură-te ca partener local sau
                    național programelor: Civic Labs și Tech for Social Good.
                  </p>
                </a>
            </Link>
          </Column>
        </Row>
      </Container>
    </section>
  )
}