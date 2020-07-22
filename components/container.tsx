import React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container px-3 mx-auto">
      {children}
    </div>
  )
}