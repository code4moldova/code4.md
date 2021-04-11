import React from 'react'
import { Column } from '../components/column'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'

export function Staff({ staff }: any) {
  return (
    <section className="py-24">
      <Container>
        <Heading tag="h1" className="text-3xl mb-8">
          Staff
        </Heading>
        <p className="mb-16 lg:w-2/3">
          Ei sunt cei care fac activitatea Code for Moldova să existe. Grație eforturilor lor formăm prima organizație
          civic tech din Moldova și prima comunitatea care poate contribui la digitalizarea țării prin soluții civice.
        </p>

        <Row className="-mb-12">
          {staff.map((person: any) => (
            <Column key={person.name} className="w-1/2 sm:w-1/3 md:w-1/4 mb-12">
              <div className="mb-4 relative" style={{ paddingBottom: '50%' }}>
                <img src={person.image} alt={person.name} className="absolute h-full w-1/2 object-cover" />
              </div>
              <Heading tag="h3" className="text-lg font-bold mb-1">
                {person.name}
              </Heading>
              <p className="text-sm mb-2">{person.role}</p>
              <div className="flex">
                {person.linkedin_url && (
                  <a href={person.linkedin_url} target="_blank" rel="noreferrer nofollow">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.92316 0.544189C1.76788 0.544189 0.00390625 2.30812 0.00390625 4.46344V16.6256C0.00390625 18.7809 1.76784 20.5442 3.92316 20.5442H16.0853C18.2406 20.5442 20.0039 18.7809 20.0039 16.6256V4.46344C20.0039 2.30816 18.2406 0.544189 16.0853 0.544189H3.92316ZM4.90891 3.84459C5.94232 3.84459 6.57886 4.52301 6.59851 5.41478C6.59851 6.28686 5.94228 6.98434 4.88892 6.98434H4.86953C3.85579 6.98434 3.20056 6.2869 3.20056 5.41478C3.20056 4.52303 3.87562 3.84459 4.90889 3.84459H4.90891ZM13.8144 8.01261C15.8019 8.01261 17.2917 9.31162 17.2917 12.1031V17.3144H14.2713V12.4525C14.2713 11.2308 13.8342 10.3973 12.7412 10.3973C11.9067 10.3973 11.4093 10.9591 11.191 11.5018C11.1112 11.6959 11.0916 11.9671 11.0916 12.2387V17.3144H8.07119C8.07119 17.3144 8.11083 9.07852 8.07119 8.22575H11.0922V9.51279C11.4936 8.89352 12.2115 8.01259 13.8144 8.01259V8.01261ZM3.37872 8.22641H6.3991V17.3144H3.37872V8.22641Z"
                        fill="#024BBB"
                      />
                    </svg>
                  </a>
                )}
                {person.website && (
                  <a href={person.website} target="_blank" rel="noreferrer nofollow" className="ml-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12H14.36ZM12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56ZM12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03ZM16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                        fill="#3399FF"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  )
}
