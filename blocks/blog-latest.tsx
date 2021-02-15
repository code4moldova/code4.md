import React from 'react'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { blogData } from "../data/blog-data"
import Link from "next/link"


const BlogLatest = () => {
    return (
        <section className="py-5 md:py-16">
            <Container >
                <div className="flex flex-wrap ">
                    <img src={blogData[0].image} alt={blogData[0].title} className="h-full w-1/2 object-cover cursor-pointer" />
                    <div className="md:w-1/3 p-4 flex flex-col gap-4">
                        <p className="text-lg  "> </p>
                        <Heading tag="h3" className="text-lg font-bold mb-5 border-b w-16 border-black ">
                        Latest
                          
                        </Heading>
                        
                        <p className="text-gray-400 text-sm">{blogData[0].date}</p>
                        
                        
                         <p className="text-2xl font-bold cursor-pointer "> {blogData[0].title}</p>
                       
                        <p className="text-lg text-gray-600  "> {blogData[0].subtitle}</p>
                        <Link href={`/blog_Article/${encodeURIComponent(blogData[0].title)}`}>
                        <button className="border border-blue-600 p-2  text-blue-600 md:w-32">  Citește</button>
                        </Link>    


                    </div>




                </div>




            </Container >



        </section >
    )
}

export default BlogLatest
