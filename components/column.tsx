import React from 'react'
import clsx from 'clsx'

type Props = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
}>

export function Column({ children, className, style }: Props) {
  return (
    <div className={clsx('px-3', className)} style={style}>
      {children}
    </div>
  )
}