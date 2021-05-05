import { createElement, ReactNode } from 'react'
import unified from 'unified'
import rehype2react from 'rehype-react'
import parseClient from 'rehype-dom-parse'
import parseServer from 'rehype-parse'

const parse = typeof window === 'undefined' ? parseServer : parseClient

const processor = unified()
  // HTML to hast
  .use(parse, { fragment: true })
  // hast to JSX
  .use(rehype2react, { createElement })

export default function htmlToReact(html: string): ReactNode {
  return processor.processSync(html).result as ReactNode
}
