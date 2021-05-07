import { createElement, ReactNode } from 'react'
import unified from 'unified'
import rehype2react from 'rehype-react'
import rehypeParseClient from 'rehype-dom-parse'
import rehypeParseServer from 'rehype-parse'
import { PdfViewerLazy } from '../components/pdf-viewer/pdf-viewer.lazy'
const rehypeParse = typeof window === 'undefined' ? rehypeParseServer : rehypeParseClient

const components = {
  pdf: PdfViewerLazy,
}

const processor = unified()
  // HTML to hast
  .use(rehypeParse, { fragment: true })
  // hast to JSX
  // @ts-ignore
  .use(rehype2react, { createElement, components })

export default function htmlToReact(html: string): ReactNode {
  return processor.processSync(html).result as ReactNode
}
