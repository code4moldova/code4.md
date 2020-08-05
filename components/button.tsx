import clsx from 'clsx'
import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement
  buttonType?: keyof typeof ButtonType
  buttonSize?: keyof typeof ButtonSize
  [key: string]: any
}

export const Button = React.forwardRef<any, Props>((props, ref) => {
    const { children, buttonType = 'primary', buttonSize = 'base', ...rest } = props
    const child = React.Children.only(children)
    return React.cloneElement(child, {
      ...rest,
      className: clsx(child?.props?.className, ButtonType[buttonType], ButtonSize[buttonSize]),
      ref,
    })
  },
)

const ButtonType = {
  'primary': 'border-2 border-blue-700 bg-blue-700 text-white hover:border-blue-900 hover:bg-blue-900',
  'primary-outline': 'border-2 border-blue-700 text-blue-700 hover:border-blue-900 hover:bg-blue-900 hover:text-white',
  'secondary-outline': 'border-2 border-gray-300 text-gray-700 hover:bg-gray-300',
}

const ButtonSize = {
  base: 'px-5 py-2',
}
