import { GetStaticProps } from 'next'
import React, { Fragment } from 'react'
import { getPosts } from '../lib/api'
import Head from 'next/head'
import { Header } from '../blocks/header'
import { Container } from '../components/container'
import { Button } from '../components/button'
import Link from 'next/link'
import { Post } from '../types/post'
import { Footer } from '../blocks/footer'
import { Row } from '../components/row'
import { Column } from '../components/column'
import { Heading } from '../components/heading'

export default function BlogPage({ posts }: { posts: Post[] }) {
  const [head, ...tail] = posts
  return (
    <Fragment>
      <Head>
        <title>Blog / Code 4 Moldova</title>
      </Head>
      <Header />
      <Container className="my-24">
        {!head && (
          <Heading tag="h1" className="text-4xl my-56 text-center">
            Articole în process de scriere...
          </Heading>
        )}

        {head && (
          <Row>
            <Column className="w-full lg:w-7/12">
              <Link href={`/posts/${head.slug}`} passHref>
                <a className="block">
                  <img src={head.data.image} alt="Post image" className="w-full" />
                </a>
              </Link>
            </Column>
            <Column className="w-full lg:w-5/12 flex flex-col justify-center px-3">
              <div>
                <span className="inline-block text-xl mt-4 mb-8 border-b border-black text-gray-600">Latest</span>
                <div className="mb-1 text-gray-400 text-sm">
                  {new Date(head.data.created_date).toLocaleDateString()}
                </div>
                <Heading tag="h1" className="text-2xl mb-8">
                  <Link href={`/posts/${head.slug}`} passHref>
                    <a className="block">
                      <strong>{head.data.title}</strong>
                    </a>
                  </Link>
                </Heading>

                <div className="mb-2 text-gray-600">{head.data.description}</div>

                {head.data.categories.length !== 0 && (
                  <div className="mb-8 text-xs">
                    {head.data.categories.map(category => (
                      <span
                        key={category}
                        className="inline-block px-3 py-1 mr-1 bg-gray-100 text-gray-500 rounded-full font-mono">
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                <Link href={`/posts/${head.slug}`} passHref>
                  <Button buttonType="primary-outline">
                    <a className="inline-block">Citeste</a>
                  </Button>
                </Link>
              </div>
            </Column>
          </Row>
        )}

        {tail.length !== 0 && (
          <Row className="mt-20">
            {tail.map(t => (
              <Column key={t.slug} className="w-full sm:w-6/12 md:w-4/12 mb-8">
                <div>
                  <Link href={`/posts/${t.slug}`} passHref>
                    <a className="mb-4 block">
                      <img src={t.data.image} alt="Post image" className="w-full" />
                    </a>
                  </Link>
                  <Heading tag="h2" className="text-xl mb-4">
                    <Link href={`/posts/${t.slug}`} passHref>
                      <a>
                        <strong>{t.data.title}</strong>
                      </a>
                    </Link>
                  </Heading>
                  <Link href={`/posts/${t.slug}`} passHref>
                    <a className="text-gray-600 block mb-4">{t.data.description}</a>
                  </Link>
                  <div className="text-gray-400 text-sm">{new Date(head.data.created_date).toLocaleDateString()}</div>
                </div>
              </Column>
            ))}
          </Row>
        )}
      </Container>
      <Footer />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getPosts(),
  },
})
