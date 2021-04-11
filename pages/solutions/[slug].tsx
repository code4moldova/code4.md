import Head from 'next/head'
import React from 'react'
import { BeWithUs } from '../../blocks/be-with-us'
import { Footer } from '../../blocks/footer'
import { Header } from '../../blocks/header'
import { Partners } from '../../blocks/partners'
import { SolutionHero } from '../../blocks/solution-hero'
import { SolutionReport } from '../../blocks/solution-report'
import { OtherSolutions } from '../../blocks/other-solutions'
import { BackButton } from '../../components/back-button'
import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { solutionsData } from '../../data/solutions-data'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSponsors } from '../../lib/api'

export default function Solution({ sponsors, solution }: any) {
  return (
    <React.Fragment>
      <Head>
        <title>Implică-te / Code 4 Moldova</title>
      </Head>
      <Header />
      <BackButton />
      <section className="bg-gray-200 p-5 lg:p-10">
        {/** Main block */}
        <SolutionHero solution={solution} />

        {/** Description block */}
        <Container className="bg-gray-100 py-5 md:py-12 px-5 md:px-12">
          <Heading tag="h2" className="text-2xl mb-10">
            Descriere
          </Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: solution.longDescription,
            }}
          />
        </Container>

        {/** Raport block */}
        {solution.report ? <SolutionReport solution={solution} /> : ''}

        {/** Partners block */}
        <Container className="bg-gray-100 pb-32 px-12">
          <Partners sponsors={sponsors} />
        </Container>

        {/** BeWithUs block */}
        <BeWithUs sectionClass="-mt-24" />

        {/** Other projects block */}
        <OtherSolutions />
      </section>
      <Footer />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {
    sponsors: getAllSponsors(),
    solution: solutionsData.find(function (o) {
      return o.slug === ctx.params?.slug
    }),
  },
})

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['/solutions/voluntar-md', '/solutions/info-c19-md', '/solutions/ajut-md'],
  fallback: false,
})
