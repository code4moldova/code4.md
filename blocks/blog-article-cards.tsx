import React from 'react'
import Link from "next/link"
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { blogData } from '../data/blog-data'

const BlogArticleCards = () => {
    return (
        <section>
            <Container>
                <Row className="-mb-12">
                    {blogData.map(article => (
                        <Column key={article.title} className="w-1/2 md:w-1/3 mb-12 cursor-pointer">
                            <div className="mb-4 relative" style={{}}>
                                <img src={article.images[0]} alt={article.title} className=" object-cover" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Link href={`/blog_Article/${encodeURIComponent(article.title)}`}>
                                    <p className="text-xl font-bold cursor-pointer "> {article.title}</p>
                                </Link>
                                <p className="text-lg text-gray-600  "> {article.subtitle}</p>
                                <p className="text-gray-400 text-sm">{article.date}</p>

                            </div>



                        </Column>
                    ))}
                </Row>


            </Container>


        </section>
    )
}

export default BlogArticleCards
