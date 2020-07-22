import React from 'react'

export function Partners() {
  return (
    <section className="bg-gray-100 py-5 md:py-16">
      <div className="container px-3 mx-auto">
        <h1 className="text-3xl mb-5 md:mb-10 mx-10 md:mx-0" style={{ fontFamily: 'Space Mono' }}>Parteneri</h1>

        <div className="flex flex-wrap -mx-3">
          <div className="px-3 mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </div>
          <div className="px-3 mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </div>
          <div className="px-3 mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </div>
          <div className="px-3 mb-4 w-full md:w-1/4 mx-10 md:mx-0">
            <img className="w-full" src="https://picsum.photos/550/205" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}