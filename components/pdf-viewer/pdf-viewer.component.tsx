import { Document, Page, pdfjs } from 'react-pdf'
import classes from './pdf-viewer.module.css'
import { useState } from 'react'
import { PDFDocumentProxy } from 'pdfjs-dist'
import { ComponentPropsWithoutNode } from 'rehype-react'

// This can be done via webpack config and load from local, but fuck this, it's 4AM
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function Pdf(props: ComponentPropsWithoutNode) {
  const { children } = props
  const [child] = children as [string]
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setPageNumber(1)
    setNumPages(numPages)
  }

  const previousDisabled = pageNumber <= 1
  const nextDisabled = pageNumber >= numPages

  return (
    <Document file={child} className={classes.documentRoot} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} className="border" />
      <div className="mx-2 mt-2 flex justify-between">
        <div>
          Pagina {pageNumber} din {numPages}
        </div>
        <div>
          <button
            className={`mr-1 px-2 ${previousDisabled ? 'text-gray-500' : 'text-blue-500'}`}
            disabled={previousDisabled}
            onClick={() => setPageNumber(pageNumber - 1)}>
            Precedenta
          </button>
          <button
            className={`ml-1 px-2 ${nextDisabled ? 'text-gray-500' : 'text-blue-500'}`}
            disabled={nextDisabled}
            onClick={() => setPageNumber(pageNumber + 1)}>
            Următoarea
          </button>
        </div>
      </div>
    </Document>
  )
}
