import React from 'react'
import { useRouter } from 'next/router'

export function BackButton() {
  const router = useRouter()

  return (
    <section className="bg-gray-200 p-5 pb-0 lg:p-10 lg:pb-0">
      <div className="container mx-auto">
        <a href="#" className="text-blue-500" onClick={() => router.back()}>
          &larr; înapoi
        </a>
      </div>
    </section>
  )
}
