import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { BeWithUs } from '../../blocks/be-with-us'
import { Footer } from '../../blocks/footer'
import { Header } from '../../blocks/header'
import { BackButton } from '../../components/back-button'
import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { useRouter } from 'next/router'
import { Button } from '../../components/button'
import { solutionsData } from '../../data/solutions-data'

export default function Solution() {
  const router = useRouter()
  const { slug } = router.query

  const solution =
    solutionsData.filter(function (o) {
      return o.slug === slug
    })[0] || solutionsData[2]

  return (
    <React.Fragment>
      <Head>
        <title>Implică-te / Code 4 Moldova</title>
      </Head>
      <Header />
      <BackButton />
      <section className="bg-gray-200 p-5 lg:p-10">
        {/** Main block */}
        <div className="container mx-auto bg-white lg:flex lg:items-stretch px-0">
          <div className="lg:w-1/2 relative">
            <img
              src={solution.image}
              className="lg:absolute lg:static lg:inset-0 w-full h-full object-cover"
              alt={solution.longTitle}
            />
          </div>
          <div className="lg:w-1/2 py-12 px-12">
            <Heading tag="h1" className="text-4xl text-blue-700 leading-none mb-2">
              {solution.longTitle}
            </Heading>
            <div className="mb-5">
              {solution.status ? (
                <span className="inline-block border border-blue-700 text-blue-700 mr-3 mb-2 px-2 rounded-full">
                  {solution.status}
                </span>
              ) : (
                ''
              )}
              {solution.mainTheme ? (
                <span className="inline-block border border-red-700 text-red-700 mr-3 mb-2 px-2 rounded-full">
                  {solution.mainTheme}
                </span>
              ) : (
                ''
              )}
              {solution.tags.map(tag => (
                <span className="inline-block border border-orange-700 text-orange-700 mr-3 mb-2 px-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {solution.launchDate ? (
              <p className="text-gray-500 mb-5">
                Lansat: <span>{solution.launchDate}</span>
              </p>
            ) : (
              ''
            )}
            <p className="mb-12">
              <strong>Scopul proiectului:</strong>
              <br />
              {solution.scope}
            </p>

            <div>
              <Link href={solution.website} passHref>
                <Button buttonType="primary-outline">
                  <a className="mr-2 mb-2 rounded-lg inline-block">Vezi aplicația</a>
                </Button>
              </Link>
              <Link href={solution.githubRepository} passHref>
                <Button buttonType="primary">
                  <a className="mr-2 mb-2 rounded-lg inline-block">Vezi codul pe GitHub</a>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/** Description block */}
        <Container className="bg-gray-100 py-12 px-12">
          <Heading tag="h2" className="text-2xl mb-10">
            Descriere
          </Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: solution.longDescription,
            }}
          />
        </Container>

        {solution.report ? (
          <Container className="bg-gray-100 pb-12 px-12">
            <Heading tag="h2" className="text-2xl mb-10">
              Raport
            </Heading>
            <div>
              <iframe
                className="scribd_iframe_embed"
                title="Suport Grupurilor Vulnerabile"
                src={solution.report}
                data-auto-height="true"
                data-aspect-ratio="0.7066666666666667"
                scrolling="no"
                width="100%"
                height="600"
                frameBorder="0"
              />
            </div>
          </Container>
        ) : (
          ''
        )}

        <BeWithUs />
      </section>
      <Footer />
    </React.Fragment>
  )
}
