import React from 'react'

type Props = React.PropsWithChildren<{
  className?: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  style?: React.CSSProperties
}>

export function Heading({ tag: Tag, className, children, style = {} }: Props) {
  return (
    <Tag className={className} style={{ fontFamily: 'Space Mono', ...style }}>
      {children}
    </Tag>
  )
}