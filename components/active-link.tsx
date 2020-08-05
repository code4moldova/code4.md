import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

type Props = React.PropsWithChildren<LinkProps & {
  children: ReactElement
  classNameActive?: string
  classNameInactive?: string
}>

export function ActiveLink(props: Props) {
  const { children, classNameActive = '', classNameInactive = '', ...rest } = props
  const child = React.Children.only(children)
  const childClassName = child?.props?.className
  const router = useRouter()

  return (
    <Link {...rest}>
      {React.cloneElement(child, {
        className: clsx(
          childClassName,
          {
            [classNameActive]: router.pathname === props.href,
            [classNameInactive]: router.pathname !== props.href,
          },
        ),
      })}
    </Link>
  )
}
