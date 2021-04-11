import React from 'react'
import { Heading } from '../components/heading'
import Link from 'next/link'
import { Button } from '../components/button'
import { Solution } from '../types/solution'

type Props = React.PropsWithChildren<{
  solution: Solution
}>

export function SolutionHero({ solution }: Props) {
  return (
    <div className="container mx-auto bg-white lg:flex lg:items-stretch">
      <div className="lg:w-1/2 relative">
        <img
          src={solution.image}
          className="lg:absolute lg:static lg:inset-0 w-full h-full object-cover"
          alt={solution.long_title}
        />
      </div>
      <div className="lg:w-1/2 py-5 md:py-12 px-5 md:px-12">
        <Heading tag="h1" className="text-4xl text-blue-700 leading-none mb-2">
          {solution.long_title}
        </Heading>
        <div className="mb-5">
          {solution.status ? (
            <span className="inline-block border border-blue-700 text-blue-700 mr-3 mb-2 px-2 rounded-full">
              {solution.status}
            </span>
          ) : (
            ''
          )}
          {solution.main_theme ? (
            <span className="inline-block border border-red-700 text-red-700 mr-3 mb-2 px-2 rounded-full">
              {solution.main_theme}
            </span>
          ) : (
            ''
          )}
          {solution.tags.map(tag => (
            <span
              key={tag}
              className="inline-block border border-orange-700 text-orange-700 mr-3 mb-2 px-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {solution.launch_date ? (
          <p className="text-gray-500 mb-5">
            Lansat: <span>{new Date(solution.launch_date).toLocaleDateString()}</span>
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
          <Link href={solution.github_repository} passHref>
            <Button buttonType="primary">
              <a className="mr-2 mb-2 rounded-lg inline-block">Vezi codul pe GitHub</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
