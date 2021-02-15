import React from 'react'
import Link from "next/link"
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { Article, blogData, getAllArticles } from '../../data/blog-data'
import Head from 'next/head'
import { Header } from '../../blocks/header'
import { Footer } from '../../blocks/footer'
import { Container } from '../../components/container'
import { Heading } from '../../components/heading'

type Props = React.PropsWithChildren<{
    article: Article
}>

const BlogArticle = ({ article }: Props) => {


    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <Header />
            <Container className="flex flex-col space-y-16 justify-center items-center mb-40">

                <div className="md:w-5/12 space-y-6">
                    <Link href="/blog" >
                        <p className="text-blue-600 cursor-pointer">{`<- înapoi`}</p>
                    </Link>
                    <Heading tag="h1" className="text-2xl">
                        {article.title}
                    </Heading>
                    <div className="flex flex-wrap text-gray-400  justify-between ">
                        <p className="text-sm">{article.date}</p>
                        <button className="border border-gray-400  rounded-md w-20 flex  items-center gap-1 justify-evenly " >
                            <svg className="w-4 h-4 text-gray-400" fill="#9CA3AF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 51" id="Layer_51"><path d="M2,29A1.12,1.12,0,0,1,1.69,29,1,1,0,0,1,1,28V27A19,19,0,0,1,17,8.24V4a1,1,0,0,1,1.6-.8l12,9a1,1,0,0,1,0,1.6l-12,9A1,1,0,0,1,17,22V18.25A18.66,18.66,0,0,0,4.93,25.67L2.81,28.59A1,1,0,0,1,2,29ZM19,6V9.12a1,1,0,0,1-.89,1,17,17,0,0,0-15,14.6l.16-.21A20.68,20.68,0,0,1,17.9,16.11a1,1,0,0,1,.77.26,1,1,0,0,1,.33.74V20l9.33-7Z" /></g></svg>

                             share
                             </button>
                    </div>

                    <p className="text-lg text-gray-600  text-lg "> {article.subtitle}</p>
                </div>
                <div className="mb-4 flex flex-wrap  gap-10 justify-center" style={{}}>
                    <img src={article.image} alt={article.title} className=" md:w-5/12 object-cover" />
                </div>


                <div className="mb-4 flex flex-wrap  gap-10 justify-center text-gray-600 " style={{}}>
                    {article.content}
                </div>


            </Container>





            <Footer />
        </>
    )
}

export default BlogArticle






//  Dynamic routes functions
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllArticles();
    return {
        paths,

        fallback: false,
    };
}
export const getStaticProps: GetStaticProps = async ({ params }: InferGetStaticPropsType<typeof getStaticProps>) => {
    // get only the article with the param id wich is the url
    const article = blogData.filter((art) => art.title == params.title)[0];
    return {
        props: {
            article,
        },
    };
}