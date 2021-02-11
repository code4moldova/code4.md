import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import BlogLatest from '../blocks/blog-latest'
import BlogArticleCards from '../blocks/blog-article-cards'


const blog = () => {
    return (
        <>
            <Head>
                <title>Despre noi / Code 4 Moldova</title>
            </Head>
            <Header />
            <BlogLatest />
            <BlogArticleCards />


            <Footer />
        </>
    )
}

export default blog
