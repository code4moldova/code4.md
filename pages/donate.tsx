import React from 'react'
import { Header } from '../blocks/header'
import { Footer } from '../blocks/footer'
import Head from 'next/head'
import { Container } from '../components/container'
import donateImage from '../images/donate-hero.svg'
import { Heading } from '../components/heading'
import { Row } from '../components/row'
import { Column } from '../components/column'

export default function Donate() {
  return (
    <React.Fragment>
      <Head>
        <title>Donează / Code 4 Moldova</title>
      </Head>
      <Header />
      <section className="bg-yellow-200 py-24">
        <Container className="mb-8">
          <img src={donateImage} alt="" className="w-full" />
          <div className="bg-white py-16 px-12">
            <Heading tag="h1" className="text-4xl mb-6">
              Investește în comunitatea ta
            </Heading>
            <p className="text-gray-800">
              În fiecare zi, zeci dintre prietenii și colegii tăi lucrează pentru a construi instrumente digitale utile
              pentru a ne face viața mai ușoară și pentru a aduce Moldova mai aproape de progresul tehnologic. Ajută-i
              să își continue munca.
            </p>

            <svg viewBox="0 0 1000 1" className="text-blue-300 my-16" stroke="currentColor">
              <line x1="0" y1="0" x2="1000" y2="0" strokeDasharray="20" />
            </svg>

            <Row>
              <Column className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <Heading tag="h3" className="text-2xl mb-6">
                  Banul tău face schimbare
                </Heading>
                <p className="text-gray-800 xl:w-4/5">
                  Code for Moldova se bazează pe voluntariat, însă activitatea noastră implică anumite cheltuieli. Tu
                  poți să ne ajuți să acoperim următoarele costuri:
                </p>
              </Column>
              <Column className="w-full lg:w-1/2">
                <Row className="text-center">
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-indigo-200 mb-3 relative" style={{ paddingBottom: '100%' }}>
                      <div className="absolute flex inset-0 items-center justify-center">
                        <svg className="w-5/12" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.717 0L0 1.717L3.02469 6.94777L4.98623 6.66008L16.9595 18.6346L15.9382 19.6154C15.4151 20.1385 15.4151 20.9309 15.9382 21.454L16.4691 21.9862C16.9922 22.5093 17.7925 22.5093 18.1848 21.9862L19.7383 23.5385C19.6075 24.3231 19.7383 25.2555 20.3922 25.9093L27.4615 32.9381C28.9 34.3766 31.2538 34.3766 32.6923 32.9381C34.3923 31.3689 34.3766 29.0229 32.9382 27.5845L25.9093 20.5138C25.2555 19.8599 24.3231 19.5984 23.5385 19.8599L21.8215 18.3077C22.2138 17.7846 22.2138 16.9843 21.8215 16.5907L21.3311 16.1016C21.2122 15.9776 21.0695 15.879 20.9115 15.8116C20.7535 15.7442 20.5835 15.7095 20.4118 15.7095C20.24 15.7095 20.07 15.7442 19.912 15.8116C19.7541 15.879 19.6113 15.9776 19.4925 16.1016L18.6346 16.9595L6.66138 4.98623L6.94646 3.02469L1.71569 0L1.717 0ZM27.217 0.0405385C24.6369 -0.173923 21.216 1.53654 19.6154 3.02338C17.646 4.99277 17.9677 7.56762 19.533 10.0535L16.7555 12.8324L18.717 15.0385C19.7632 14.1231 21.3062 14.1231 22.3524 15.0385L22.8846 15.5694L23.0075 15.6923L24.1518 14.5481C26.5161 15.9382 28.9772 16.1382 30.8537 14.2617C32.6845 12.5617 34.6695 8.36923 33.7542 5.88461L30.0769 9.68477C29.5538 10.2078 28.7614 10.2078 28.2383 9.68477L24.4368 5.88461C24.3129 5.76574 24.2142 5.62301 24.1468 5.46503C24.0795 5.30704 24.0447 5.13706 24.0447 4.96531C24.0447 4.79355 24.0795 4.62357 24.1468 4.46559C24.2142 4.3076 24.3129 4.16488 24.4368 4.046L28.2396 0.245846C27.9127 0.130769 27.5858 0.0719231 27.217 0.0405385ZM12.8324 16.3462L8.09069 21.0865C7.58116 20.9733 7.0604 20.9185 6.53846 20.9231C2.87692 20.9231 0 23.8 0 27.4615C0 31.1231 2.87692 34 6.53846 34C10.2 34 13.0769 31.1231 13.0769 27.4615C13.0769 26.7907 12.971 26.146 12.7905 25.5405L15.5694 22.7617L15.1614 22.2308C14.1152 21.1846 14.1231 19.5997 15.0385 18.5522L12.8311 16.3462H12.8324ZM22.967 22.3132C23.1305 22.3132 23.2848 22.3445 23.4155 22.4766L31.1401 30.1998C31.4016 30.4614 31.4016 30.8772 31.1401 31.1388C30.8785 31.4003 30.4601 31.4003 30.1985 31.1388L22.4766 23.4155C22.2151 23.154 22.2151 22.7382 22.4766 22.4766C22.6074 22.3458 22.8035 22.3132 22.967 22.3132ZM7.43815 24.0681L9.93062 26.5618L9.03092 29.9527L5.64008 30.8524L3.14631 28.3586L4.046 24.9678L7.43815 24.0681Z"
                            fill="#919CFF"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-indigo-500">Întreținerea platformei</p>
                  </Column>
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-purple-200 mb-3 relative" style={{ paddingBottom: '100%' }}>
                      <div className="absolute flex inset-0 items-center justify-center">
                        <svg className="w-5/12" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M29.75 21.25C30.9232 21.25 31.9248 21.665 32.7549 22.4951C33.585 23.3252 34 24.3268 34 25.5V29.75C34 30.9232 33.585 31.9248 32.7549 32.7549C31.9248 33.585 30.9232 34 29.75 34H4.25C3.07682 34 2.0752 33.585 1.24512 32.7549C0.415039 31.9248 0 30.9232 0 29.75V25.5C0 24.3268 0.415039 23.3252 1.24512 22.4951C2.0752 21.665 3.07682 21.25 4.25 21.25H14.875V17H4.25C3.07682 17 2.0752 16.585 1.24512 15.7549C0.415039 14.9248 0 13.9232 0 12.75V8.5C0 7.32682 0.415039 6.3252 1.24512 5.49512C2.0752 4.66504 3.07682 4.25 4.25 4.25H14.875V2.125C14.875 1.52734 15.0798 1.02376 15.4893 0.614258C15.8988 0.204753 16.3968 0 16.9834 0C17.57 0 18.0736 0.204753 18.4941 0.614258C18.9147 1.02376 19.125 1.52734 19.125 2.125V4.25H29.75C30.9232 4.25 31.9248 4.66504 32.7549 5.49512C33.585 6.3252 34 7.32682 34 8.5V12.75C34 13.9232 33.585 14.9248 32.7549 15.7549C31.9248 16.585 30.9232 17 29.75 17H19.125V21.25H29.75ZM6.3584 25.5C5.77181 25.5 5.27376 25.7103 4.86426 26.1309C4.45475 26.5514 4.25 27.055 4.25 27.6416C4.25 28.2282 4.45475 28.7262 4.86426 29.1357C5.27376 29.5452 5.77181 29.75 6.3584 29.75C6.94499 29.75 7.44857 29.5452 7.86914 29.1357C8.28971 28.7262 8.5 28.2282 8.5 27.6416C8.5 27.055 8.28971 26.5514 7.86914 26.1309C7.44857 25.7103 6.94499 25.5 6.3584 25.5ZM6.3584 8.5C5.77181 8.5 5.27376 8.71029 4.86426 9.13086C4.45475 9.55143 4.25 10.055 4.25 10.6416C4.25 11.2282 4.45475 11.7262 4.86426 12.1357C5.27376 12.5452 5.77181 12.75 6.3584 12.75C6.94499 12.75 7.44857 12.5452 7.86914 12.1357C8.28971 11.7262 8.5 11.2282 8.5 10.6416C8.5 10.055 8.28971 9.55143 7.86914 9.13086C7.44857 8.71029 6.94499 8.5 6.3584 8.5ZM27.625 12.75C28.2005 12.75 28.6986 12.5452 29.1191 12.1357C29.5397 11.7262 29.75 11.2282 29.75 10.6416C29.75 10.055 29.5397 9.55143 29.1191 9.13086C28.6986 8.71029 28.2005 8.5 27.625 8.5H14.875C14.2773 8.5 13.7738 8.71029 13.3643 9.13086C12.9548 9.55143 12.75 10.055 12.75 10.6416C12.75 11.2282 12.9548 11.7262 13.3643 12.1357C13.7738 12.5452 14.2773 12.75 14.875 12.75H27.625ZM14.875 25.5C14.2773 25.5 13.7738 25.7103 13.3643 26.1309C12.9548 26.5514 12.75 27.055 12.75 27.6416C12.75 28.2282 12.9548 28.7262 13.3643 29.1357C13.7738 29.5452 14.2773 29.75 14.875 29.75H27.625C28.2005 29.75 28.6986 29.5452 29.1191 29.1357C29.5397 28.7262 29.75 28.2282 29.75 27.6416C29.75 27.055 29.5397 26.5514 29.1191 26.1309C28.6986 25.7103 28.2005 25.5 27.625 25.5H14.875Z"
                            fill="#A690FF"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-purple-500">Domenii web și hosting</p>
                  </Column>
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-blue-200 mb-3 relative" style={{ paddingBottom: '100%' }}>
                      <div className="absolute flex inset-0 items-center justify-center">
                        <svg className="w-5/12" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M24.6672 0.151367H25.6051C25.6524 0.176477 25.701 0.199138 25.7507 0.219259C26.4977 0.479961 26.9093 1.00354 26.9479 1.7775C26.9771 2.33693 26.9562 2.89907 26.96 3.46121C26.96 3.55626 26.9705 3.65076 26.9766 3.75939H27.3412C28.3799 3.75939 29.4185 3.75939 30.4571 3.75939C31.2146 3.75939 31.9207 3.95057 32.5287 4.3905C33.5278 5.11396 33.9978 6.09539 33.9961 7.32939C33.9851 14.578 33.9833 21.8266 33.9906 29.0753C33.9906 29.6999 34.0177 30.3245 33.9807 30.948C33.9095 32.1429 33.338 33.0662 32.2854 33.6636C31.8948 33.8847 31.4386 33.9922 31.0121 34.1525H2.98679C2.89963 34.1269 2.81412 34.0981 2.72585 34.077C2.05527 33.9389 1.44332 33.603 0.971507 33.114C0.28577 32.3965 0 31.5346 0 30.5412C0.0128725 22.8063 0.0152631 15.0712 0.00717183 7.3359C0.00717183 7.20012 0.00717183 7.06434 0.013792 6.9291C0.0493076 6.27429 0.288947 5.64616 0.700081 5.13025C1.43437 4.18737 2.41967 3.75613 3.61515 3.7583C4.63503 3.7583 5.65508 3.7583 6.67532 3.7583C6.78069 3.7583 6.88606 3.74635 7.00633 3.73875C7.00633 3.08699 7.00964 2.46185 7.00633 1.83779C7.00247 1.30606 7.20328 0.860153 7.6209 0.534275C7.83054 0.371335 8.09645 0.27683 8.33808 0.151367H9.27594C9.31035 0.177684 9.3473 0.200605 9.38627 0.219802C10.2138 0.525041 10.5922 1.05405 10.6 1.92632C10.6 2.2522 10.6 2.57808 10.6 2.90395C10.6 3.18149 10.6 3.45849 10.6 3.74146H23.352C23.352 3.11034 23.352 2.49769 23.352 1.88504C23.352 1.31856 23.5562 0.837342 24.0218 0.495169C24.216 0.351239 24.451 0.263795 24.6672 0.151367ZM16.9774 30.3348H29.7471C30.1228 30.3348 30.1228 30.3348 30.1228 29.9682C30.1228 24.085 30.1228 18.2011 30.1228 12.3164C30.1228 11.9313 30.1228 11.9308 29.7366 11.9308H4.27827C3.875 11.9308 3.87444 11.9308 3.87444 12.3278C3.87444 18.202 3.87444 24.0761 3.87444 29.9502C3.87444 30.3304 3.87444 30.3304 4.26062 30.3304L16.9774 30.3348Z"
                            fill="#90AFFF"
                          />
                          <path
                            d="M12.4954 25.2207C12.6124 24.5337 12.7332 23.7651 12.8766 23.0009C13.0598 22.0233 13.0625 22.0309 12.3431 21.3601C11.8036 20.8572 11.2736 20.3445 10.7532 19.822C10.4498 19.5168 10.3461 19.1393 10.4729 18.7205C10.6136 18.2572 10.9435 17.9965 11.4202 17.9221C12.1732 17.8048 12.9279 17.6984 13.6821 17.587C13.809 17.568 13.9369 17.5251 14.0627 17.5327C14.482 17.5495 14.6552 17.297 14.8136 16.9635C15.1865 16.1781 15.576 15.3987 15.9908 14.634C16.2998 14.0653 16.9133 13.8693 17.4942 14.155C17.718 14.2742 17.902 14.4547 18.0238 14.6747C18.4293 15.4139 18.8088 16.1678 19.1685 16.9298C19.3384 17.2894 19.5299 17.5077 19.9784 17.549C20.8274 17.6267 21.6687 17.7891 22.5134 17.9129C23.0099 17.9857 23.3723 18.2236 23.5207 18.7129C23.6647 19.1876 23.5091 19.5754 23.1555 19.9138C22.4648 20.575 21.7811 21.2432 21.1044 21.9185C21.0644 21.9626 21.0341 22.0142 21.0151 22.0702C20.9961 22.1263 20.989 22.1855 20.994 22.2444C21.1358 23.1286 21.2853 24.0117 21.4536 24.8916C21.538 25.3337 21.5165 25.7443 21.1971 26.0865C20.8329 26.477 20.2713 26.5612 19.7803 26.3102C18.9655 25.8942 18.1501 25.4787 17.3452 25.0442C17.1014 24.9128 16.9077 24.9024 16.6578 25.0377C15.8535 25.4722 15.0381 25.8888 14.2216 26.3026C13.4051 26.7165 12.4816 26.1772 12.4954 25.2207Z"
                            fill="#90AFFF"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-blue-500">Evenimente</p>
                  </Column>
                  <Column className="w-1/2 sm:w-1/4 mb-3 sm:mb-0">
                    <div className="rounded-full bg-pink-200 mb-3 relative" style={{ paddingBottom: '100%' }}>
                      <div className="absolute flex inset-0 items-center justify-center">
                        <svg className="w-5/12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M27.8999 17.5667C27.9666 17.0667 27.9999 16.55 27.9999 16C27.9999 15.4667 27.9666 14.9333 27.8833 14.4333L31.2666 11.8C31.4124 11.6798 31.512 11.5128 31.5485 11.3274C31.585 11.1421 31.556 10.9498 31.4666 10.7833L28.2666 5.25C28.1724 5.08261 28.022 4.95396 27.842 4.88685C27.662 4.81974 27.4641 4.8185 27.2833 4.88334L23.2999 6.48334C22.4666 5.85 21.5833 5.31667 20.5999 4.91667L19.9999 0.683338C19.9704 0.492555 19.8735 0.318683 19.7267 0.193298C19.5799 0.0679134 19.393 -0.000669174 19.1999 4.92233e-06H12.7999C12.3999 4.92233e-06 12.0833 0.283338 12.0166 0.683338L11.4166 4.91667C10.4333 5.31667 9.53327 5.86667 8.71661 6.48334L4.73327 4.88334C4.36661 4.75 3.94994 4.88334 3.74994 5.25L0.566607 10.7833C0.366607 11.1333 0.433273 11.5667 0.766607 11.8L4.14994 14.4333C4.06661 14.9333 3.99994 15.4833 3.99994 16C3.99994 16.5167 4.03327 17.0667 4.11661 17.5667L0.733273 20.2C0.58748 20.3202 0.487863 20.4872 0.451394 20.6726C0.414926 20.8579 0.443862 21.0502 0.533274 21.2167L3.73327 26.75C3.93327 27.1167 4.34994 27.2333 4.71661 27.1167L8.69994 25.5167C9.53327 26.15 10.4166 26.6833 11.3999 27.0833L11.9999 31.3167C12.0833 31.7167 12.3999 32 12.7999 32H19.1999C19.5999 32 19.9333 31.7167 19.9833 31.3167L20.5833 27.0833C21.5666 26.6833 22.4666 26.15 23.2833 25.5167L27.2666 27.1167C27.6333 27.25 28.0499 27.1167 28.2499 26.75L31.4499 21.2167C31.6499 20.85 31.5666 20.4333 31.2499 20.2L27.8999 17.5667ZM15.9999 22C12.6999 22 9.99994 19.3 9.99994 16C9.99994 12.7 12.6999 10 15.9999 10C19.2999 10 21.9999 12.7 21.9999 16C21.9999 19.3 19.2999 22 15.9999 22Z"
                            fill="#FD90FF"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-pink-500">Administrare</p>
                  </Column>
                </Row>
              </Column>
            </Row>
          </div>
        </Container>
        <Container className="mb-20">
          <Row>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white p-12 border-t-8 border-blue-500 h-full">
                <h2 className="text-2xl font-bold text-blue-500 mb-8">Donează prin transfer bancar</h2>
                <p className="text-gray-800 mb-8">
                  Rechizite bancare pentru transferuri în <strong>MDL</strong>:
                </p>
                <dl>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Denumirea Clientului:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      AO "CODE FOR MOLDOVA"s
                    </dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">IBAN (cont curent):</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      MD12VI022241700000931MDL
                    </dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Codul fiscal:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">1020620002933</dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Denumirea Bancii:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      BC “VICTORIABANK” SA suc. 17, Chișinău
                    </dd>
                  </div>
                  <div className="py-1 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm leading-5 font-medium text-gray-500">Codul bancar:</dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">VICBMD2X</dd>
                  </div>
                </dl>
              </div>
            </Column>
            <Column className="w-full xl:w-1/2 mb-8">
              <div className="bg-white p-12 border-t-8 border-blue-500 h-full">
                <h2 className="text-2xl font-bold text-blue-500 mb-8">Fundraising</h2>
                <dl>
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    <dt>
                      <img
                        width="500"
                        height="200"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png"
                        alt="paypal"
                      />
                    </dt>
                    <dd className="col-span-2">
                      <a
                        href="https://paypal.me/code4md?locale.x=en_US"
                        className="underline text-blue-500 mb-4 inline-block">
                        Donează prin PayPal
                      </a>
                      <p>Sustine Code4Moldova pentru a schimba Moldova spre bine.</p>
                    </dd>
                  </div>
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    <dt>
                      <img src="https://picsum.photos/500/200" alt="paypal" />
                    </dt>
                    <dd className="col-span-2">
                      <a href="#" className="underline text-blue-500 mb-4 inline-block">
                        Donează prin X
                      </a>
                      <p>Adipiscing elit egestas in tellus adipiscing orci morbi amet tortor.</p>
                    </dd>
                  </div>
                </dl>
              </div>
            </Column>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}
