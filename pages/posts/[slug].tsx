import { GetStaticPaths, GetStaticProps } from 'next'
import React, { Fragment } from 'react'
import { Container } from '../../components/container'
import { Header } from '../../blocks/header'
import Head from 'next/head'
import { getPosts, getPostsSlugs } from '../../lib/api'
import { Post } from '../../types/post'
import { Row } from '../../components/row'
import { Column } from '../../components/column'
import { Heading } from '../../components/heading'
import { Footer } from '../../blocks/footer'

export default function PostPage({ post }: { post: Post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.data.title} / Code 4 Moldova</title>
      </Head>
      <Header />
      <Container className="my-24">
        <Row className="justify-center">
          <Column className="w-full lg:w-2/3 xl:w-1/2">
            <Heading tag="h1" className="text-3xl mb-8">
              {post.data.title}
            </Heading>
            <div className="mb-8 text-gray-400">{new Date(post.data.created_date).toLocaleDateString()}</div>

            <div className="mb-2 text-gray-600">{post.data.description}</div>

            {post.data.categories.length !== 0 && (
              <div className="mb-16 text-xs">
                {post.data.categories.map(category => (
                  <span
                    key={category}
                    className="inline-block px-3 py-1 mr-1 bg-gray-100 text-gray-500 rounded-full font-mono">
                    {category}
                  </span>
                ))}
              </div>
            )}

            {post.data.image && <img src={post.data.image} alt="Post image" className="mb-16 w-full" />}

            <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
          </Column>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {
    post: getPosts().find(post => post.slug === ctx.params?.slug),
  },
})

export const getStaticPaths: GetStaticPaths = async ctx => ({
  paths: getPostsSlugs().map(slug => `/posts/${slug}`),
  fallback: false,
})
