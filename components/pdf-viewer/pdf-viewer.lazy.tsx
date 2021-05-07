import dynamic from 'next/dynamic'

export const PdfViewerLazy = dynamic(() => import('./pdf-viewer.component'), { ssr: false })
