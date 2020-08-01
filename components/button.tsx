import clsx from 'clsx'
import React from 'react'

type Props = {
  tag?: keyof JSX.IntrinsicElements
  buttonType?: keyof typeof ButtonType
  buttonSize?: keyof typeof ButtonSize
  [key: string]: any
}

export function Button(props: Props) {
  const { tag: Tag = 'button', buttonType = 'primary', buttonSize = 'base', className, ...rest } = props
  const classes = clsx(ButtonType[buttonType], ButtonSize[buttonSize], className)
  return <Tag className={classes} {...rest} />
}

const ButtonType = {
  'primary': 'border-2 border-blue-700 bg-blue-700 text-white hover:border-blue-900 hover:bg-blue-900',
  'primary-outline': 'border-2 border-blue-700 text-blue-700 hover:border-blue-900 hover:bg-blue-900 hover:text-white',
  'secondary-outline': 'border-2 border-gray-300 text-gray-700 hover:bg-gray-300',
}

const ButtonSize = {
  base: 'px-5 py-2',
}
