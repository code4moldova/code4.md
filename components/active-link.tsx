import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

type Props = React.PropsWithChildren<
  LinkProps & {
    children: ReactElement
    classNameActive?: string
    classNameInactive?: string
  }
>

export function ActiveLink(props: Props) {
  const { children, classNameActive = '', classNameInactive = '', ...rest } = props
  const child: ReactElement = React.Children.only(children)
  const router = useRouter()

  return (
    <Link {...rest}>
      {React.cloneElement(child, {
        className: clsx(child.props.className, {
          [classNameActive]: router.pathname === props.href,
          [classNameInactive]: router.pathname !== props.href,
        }),
      })}
    </Link>
  )
}
