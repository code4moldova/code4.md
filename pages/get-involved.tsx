import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { Container } from '../components/container'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import { Column } from '../components/column'
import clock from '../images/clock.png'
import donateHand from '../images/donate-hand.png'
import Link from 'next/link'
import partner from '../images/partner.png'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Implică-te / Code 4 Moldova</title>
      </Head>
      <Header />
      <section className="bg-blue-100 pt-12 sm:pt-32 pb-56">
        <Container className="mb-20 sm:mb-32">
          <Heading tag="h1" className="text-4xl text-center mb-12">
            Implică-te
          </Heading>
          <p className="w-full sm:w-3/5 xl:w-3/5 mx-auto">
            Implicarea ta contribuie la dezvoltarea societății noastre. Oferind câteva ore,
            know-how-ul tău sau o donație oricât de mică, ne ajută să identificăm atât problemele
            din comunitate cât și să dezvoltăm soluții digitale pentru o Moldovă mai bună.
            Vino alături de noi și susține aplicațiile civice!
          </p>
        </Container>
        <Container className="xl:mb-8">
          <Row>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white border-t-8 border-blue-500 h-full flex flex-col">
                <div className="flex px-12 my-8 items-center justify-center">
                  <img src={clock} alt="clock" className="mr-8" />
                  <h2 className="text-2xl font-bold text-blue-500">Dăruiește Timp</h2>
                </div>
                <div className="px-12 mb-8">
                  <p className="text-gray-800">Avem nevoie de specialiști în următoarele domenii:</p>

                  <div className="my-12">
                    <div className="-mb-2">
                      <span
                        className="inline-flex items-center px-5 py-1 mb-2 mr-2 text-blue-500 border border-blue-500 rounded-md"
                      >
                        {rulerSvg} <span className="ml-2">Design</span>
                      </span>
                      <span
                        className="inline-flex items-center px-5 py-1 mb-2 mr-2 text-pink-500 border border-pink-500 rounded-md"
                      >
                        {developerSvg} <span className="ml-2">Programare</span>
                      </span>
                      <span
                        className="inline-flex items-center px-5 py-1 mb-2 mr-2 text-indigo-500 border border-indigo-500 rounded-md"
                      >
                        {searchSvg} <span className="ml-2">Cercetare</span>
                      </span>
                      <span
                        className="inline-flex items-center px-5 py-1 mb-2 mr-2 text-yellow-800 border border-yellow-800 rounded-md"
                      >
                        {chatSvg} <span className="ml-2">Comunicare</span>
                      </span>
                      <span
                        className="inline-flex items-center px-5 py-1 mb-2 mr-2 text-gray-600 border border-gray-600 rounded-md"
                      >
                        {plusSvg} <span className="ml-2">Alte</span>
                      </span>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac sodales lobortis netus eu vestibulum
                    justo dolor sit amet, consectetur adipiscing.
                  </p>
                </div>

                <a rel="noopener noreferrer" target="_blank" href="https://forms.gle/rMH5XpsSjhaY8Lr97" className="mt-auto py-4 px-12 w-full bg-blue-500 hover:bg-blue-700 text-white text-center">
                  Devino voluntar
                </a>

              </div>
            </Column>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white border-t-8 border-blue-700 h-full flex flex-col">
                <div className="flex px-12 my-8 items-center justify-center">
                  <img src={donateHand} alt="donate hand" className="mr-8" />
                  <h2 className="text-2xl font-bold text-blue-700">Donează Bani</h2>
                </div>
                <div className="px-12 mb-8">
                  <p className="text-gray-800">
                    Code for Moldova se bazează pe voluntariat, însă activitatea noastră implică anumite cheltuieli,
                    precum ar fi:
                  </p>

                  <div className="my-12 px-0 sm:px-8">
                    <Row className="text-center">
                      <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                        <div className="rounded-full bg-indigo-200 mb-3" style={{ paddingBottom: '100%' }} />
                        <p className="text-sm text-indigo-500">Întreținerea platformei</p>
                      </Column>
                      <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                        <div className="rounded-full bg-purple-200 mb-3" style={{ paddingBottom: '100%' }} />
                        <p className="text-sm text-purple-500">Domenii web și hosting</p>
                      </Column>
                      <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                        <div className="rounded-full bg-blue-200 mb-3" style={{ paddingBottom: '100%' }} />
                        <p className="text-sm text-blue-500">Administrare</p>
                      </Column>
                      <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                        <div className="rounded-full bg-pink-200 mb-3" style={{ paddingBottom: '100%' }} />
                        <p className="text-sm text-pink-500">Evenimente</p>
                      </Column>
                    </Row>
                  </div>

                  <p>
                    Fiecare donație ajută la continuarea activității noastre. TU poți contribui la dezvoltarea unui
                    proiect!
                  </p>
                </div>
                <Link href="/donate">
                  <a className="mt-auto py-4 px-12 w-full bg-blue-700 hover:bg-blue-900 text-white text-center">
                    Donează
                  </a>
                </Link>
              </div>
            </Column>
          </Row>
        </Container>
        <Container>
          <div className="bg-white w-full xl:w-1/2 mx-auto border-t-8 border-blue-900 flex flex-col">
            <div className="flex px-12 my-12 items-center justify-center">
              <img src={partner} alt="partner" className="mr-8 h-16 w-16" />
              <h2 className="text-2xl font-bold text-blue-900">Devino Partenerul Nostru</h2>
            </div>
            <div className="px-12 mb-12">
              Devino una dintre companiile care încurajează voluntariatul în IT și alătură-te ca partener local sau
              național programelor: Civic Labs și Tech for Social Good.
            </div>
            <a rel="noopener noreferrer" target="_blank" href="mailto:contact@code4.md" className="mt-auto py-4 px-12 w-full bg-blue-900 hover:bg-blue-700 text-white text-center">
              Hai să vorbim
            </a>

          </div>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}

const rulerSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 9.70508V14.5001H9.295L8.295 13.5001H5.5V10.7051L4.5 9.70508Z" />
    <path
      d="M17.435 17.145L16 15.69V17H2.00001V14.925H3.00001V14.125H2.00001V10.8H3.00001V9.99998H2.00001V6.79998H3.00001V5.99998H2.00001V3.20498L9.97001 11.13V9.71998L1.85501 1.64498C1.78507 1.57446 1.69572 1.52637 1.59835 1.50684C1.50098 1.4873 1.39999 1.49721 1.30827 1.53529C1.21655 1.57338 1.13824 1.63791 1.08334 1.72067C1.02844 1.80343 0.999431 1.90067 1.00001 1.99998V17.5C1.00001 17.6326 1.05269 17.7598 1.14646 17.8535C1.24022 17.9473 1.3674 18 1.50001 18H17.08C17.1793 18.0006 17.2766 17.9715 17.3593 17.9166C17.4421 17.8617 17.5066 17.7834 17.5447 17.6917C17.5828 17.6 17.5927 17.499 17.5731 17.4016C17.5536 17.3043 17.5055 17.2149 17.435 17.145Z"
    />
    <path
      d="M12 16H14C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5195 15 15.2652 15 15V5.34996L13.85 3.23496C13.7611 3.08087 13.6326 2.9533 13.4779 2.86541C13.3232 2.77751 13.1479 2.73248 12.97 2.73496C12.7881 2.7364 12.61 2.78745 12.4549 2.88261C12.2999 2.97776 12.1737 3.11342 12.09 3.27496L11 5.35996V15C11 15.2652 11.1054 15.5195 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16ZM12 5.59996L12.97 3.71496L14 5.60496V13H12V5.59996ZM12 13.815H14V15.035H12V13.815Z"
    />
  </svg>
)

const developerSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.53124 12.5856L6.46874 11.4141L3.45074 8.99981L6.46874 6.58556L5.53124 5.41406L1.78124 8.41406C1.69337 8.48432 1.62244 8.57345 1.57369 8.67485C1.52494 8.77625 1.49963 8.88731 1.49963 8.99981C1.49963 9.11232 1.52494 9.22338 1.57369 9.32478C1.62244 9.42617 1.69337 9.5153 1.78124 9.58556L5.53124 12.5856ZM12.4687 5.41406L11.5312 6.58556L14.5492 8.99981L11.5312 11.4141L12.4687 12.5856L16.2187 9.58556C16.3066 9.5153 16.3775 9.42617 16.4263 9.32478C16.475 9.22338 16.5003 9.11232 16.5003 8.99981C16.5003 8.88731 16.475 8.77625 16.4263 8.67485C16.3775 8.57345 16.3066 8.48432 16.2187 8.41406L12.4687 5.41406Z"
    />
    <path d="M11.232 2.41193L8.23202 15.9119L6.76727 15.5864L9.76727 2.08643L11.232 2.41193Z" />
  </svg>
)

const searchSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.5 1.5H4.5C3.675 1.5 3.0075 2.175 3.0075 3L3 15C3 15.825 3.6675 16.5 4.4925 16.5H13.5C14.325 16.5 15 15.825 15 15V6L10.5 1.5ZM4.5 3H9.75L13.5 6.75V13.185L12.12 11.805C12.5949 11.0848 12.8064 10.2227 12.719 9.3645C12.6315 8.50629 12.2504 7.7046 11.64 7.095C11.2939 6.74744 10.8824 6.47177 10.4294 6.28385C9.97628 6.09592 9.49051 5.99945 9 6C8.00736 6.00021 7.05529 6.39398 6.3525 7.095C6.00486 7.44193 5.72906 7.85401 5.54088 8.30766C5.3527 8.76131 5.25584 9.24762 5.25584 9.73875C5.25584 10.2299 5.3527 10.7162 5.54088 11.1698C5.72906 11.6235 6.00486 12.0356 6.3525 12.3825C6.96229 12.993 7.76458 13.3736 8.62313 13.4597C9.48169 13.5459 10.3436 13.3322 11.0625 12.855L13.2 15H4.5V3ZM10.5825 11.325C10.1625 11.745 9.6 11.985 9 11.985C8.4 11.985 7.8375 11.7525 7.4175 11.325C6.9975 10.905 6.7575 10.3425 6.7575 9.7425C6.7575 9.1425 6.99 8.58 7.4175 8.16C7.8375 7.7325 8.4 7.5 9 7.5C9.6 7.5 10.1625 7.7325 10.5825 8.16C11.0025 8.58 11.2425 9.1425 11.2425 9.7425C11.2425 10.3425 11.01 10.905 10.5825 11.325Z"
    />
  </svg>
)

const chatSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5 13C11.5 13.1326 11.4473 13.2598 11.3536 13.3536C11.2598 13.4473 11.1326 13.5 11 13.5H4C3.89 13.5 3.785 13.6 3.695 13.665L2 15V7C2 6.86739 2.05268 6.74022 2.14645 6.64645C2.24022 6.55268 2.36739 6.5 2.5 6.5H4.43V5.5H2.5C2.10218 5.5 1.72064 5.65804 1.43934 5.93934C1.15804 6.22064 1 6.60218 1 7V16C1.00074 16.0929 1.02733 16.1837 1.07679 16.2623C1.12624 16.3409 1.19661 16.4041 1.28 16.445C1.36034 16.4815 1.44892 16.4962 1.53674 16.4874C1.62456 16.4786 1.70849 16.4467 1.78 16.395L4.355 14.5H11.075C11.2645 14.5056 11.4531 14.4722 11.6292 14.402C11.8053 14.3317 11.9651 14.226 12.0987 14.0915C12.2323 13.957 12.3368 13.7965 12.4059 13.6199C12.4749 13.4433 12.5069 13.2545 12.5 13.065V12.5H11.5V13Z"
    />
    <path
      d="M15.5 2H7C6.60218 2 6.22064 2.15804 5.93934 2.43934C5.65804 2.72064 5.5 3.10218 5.5 3.5V9.5C5.5 9.89782 5.65804 10.2794 5.93934 10.5607C6.22064 10.842 6.60218 11 7 11H13.775L16.165 12.855C16.236 12.9075 16.3197 12.9403 16.4076 12.95C16.4954 12.9596 16.5842 12.9458 16.665 12.91C16.7501 12.8695 16.822 12.8057 16.8724 12.7261C16.9228 12.6465 16.9497 12.5542 16.95 12.46V3.5C16.9502 3.11069 16.7991 2.73654 16.5285 2.45663C16.2579 2.17672 15.8891 2.01298 15.5 2ZM16 11.47L14.25 10.105C14.1627 10.0373 14.0555 10.0003 13.945 10H7C6.86739 10 6.74021 9.94732 6.64645 9.85355C6.55268 9.75979 6.5 9.63261 6.5 9.5V3.5C6.5 3.36739 6.55268 3.24021 6.64645 3.14645C6.74021 3.05268 6.86739 3 7 3H15.5C15.6337 3.01213 15.7583 3.07271 15.8504 3.17033C15.9424 3.26795 15.9957 3.39587 16 3.53V11.47Z"
    />
  </svg>
)

const plusSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.47266 2.67188H9.52734C9.62109 2.67188 9.66797 2.71875 9.66797 2.8125V15.1875C9.66797 15.2812 9.62109 15.3281 9.52734 15.3281H8.47266C8.37891 15.3281 8.33203 15.2812 8.33203 15.1875V2.8125C8.33203 2.71875 8.37891 2.67188 8.47266 2.67188Z"
    />
    <path
      d="M3.09375 8.33203H14.9062C15 8.33203 15.0469 8.37891 15.0469 8.47266V9.52734C15.0469 9.62109 15 9.66797 14.9062 9.66797H3.09375C3 9.66797 2.95312 9.62109 2.95312 9.52734V8.47266C2.95312 8.37891 3 8.33203 3.09375 8.33203Z"
    />
  </svg>
)
