import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'

export function Solutions() {
  return (
    <section className="bg-gray-100 py-5 md:py-16">
      <Container>

        <div className="flex justify-between items-center mb-5 md:mb-10">
          <h1 className="text-3xl" style={{ fontFamily: 'Space Mono' }}>
            Soluții IT
          </h1>
          <button className="border-2 border-blue-700 text-blue-600 hover:text-white hover:bg-blue-700 px-5 py-2">
            Vezi toate
          </button>
        </div>

        <Row>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="bg-white h-full">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <img
                  className="absolute w-full h-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/2c53/b0ba/52bd8ed934e2cb3edf78508dc7f9cc77?Expires=1595808000&Signature=LJAPmie~b~SkJzHbG7kLE5zyarHo8CAm1jrjNeF4pONs1WjbQzEKEiaJ~IZ5BxEfXN5w93BywHxZmg1T0Ny8mA98AbZOwS~s3WMsbi-80LdOcIIAFDFSBdUEtLz~QnLTu9n~G2cQVqUWa53O2IIaJRzqYTvYn083~caDCh2ga87eMw8v0txKC-k5CaRS0MgHuk~~-F0uZ1ouQIdk41knN9dLsGHJJPSlQme8z7TeArbH3EXQ0QlHdUNmQXSR98QbuMMp~B58t9Rne8o2O5ZbIXOb-XH5kILBfhy1zat00nAcAowYjTfBEM5FuLMzxVKI52Itv1riwKO83Wj9LMkPwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="Girl pressing door buttons"
                />
                <div className="absolute w-full h-full bg-green-700 opacity-50" />
                <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                  <h2
                    className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right"
                  >
                    Inițiativa
                    <br />
                    <span className="text-yellow-400">Împreună</span>
                    <br />
                    <span className="text-yellow-400">împotriva</span>
                    <br />
                    <span className="text-yellow-400">COVID-19</span>
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">voluntar.md</div>
                <p className="text-gray-700 text-base">
                  Platforma care conectează persoanele care au nevoie de ajutor cu cele care doresc să ajute.
                </p>
              </div>
            </div>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="bg-white h-full">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <img
                  className="absolute w-full h-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/06d5/feb0/56b1a0a66fd3d422be6cfdb1e17ab519?Expires=1595808000&Signature=DJeOURX~~S9RwuvQiL8dGcMPy8VO1laUrMpbDSCnN8h9Uc8vOn6w6H6BonKFY0E8plKD1UStIu0nj1mjnfV5Ghs3X9-0gKM7JC6gQSo5erF56IoMXzsxwUqOWvysMNTZqk668jQpAyYIJvRjNHBFcv5usq5WHbyWrzpaJnecEKYOuSbTC8WkiXB4vjoYIYtSSTywdCIgKNQr95pG9qLbJyF49AIo9Ahk5o5BtQ7JU4hBDZa6LSEvM8UniIPdcfRSoHiXJ5er1D556obPJv1-PjnbkpgrElyPbXBPwgX1mlzCQLBzONSS593W-87y5o3QJc6r2KiMmEPN62N3cZjlOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="Coronvirus image"
                />
                <div className="absolute w-full h-full bg-red-800 opacity-50" />
                <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                  <h2
                    className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right"
                  >
                    Centru de
                    <br />
                    Informare
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">info.c19.md</div>
                <p className="text-gray-700 text-base">
                  Portal informativ cu privire la situația creată de COVID-19 în Moldova.
                </p>
              </div>
            </div>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="bg-white h-full">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <img
                  className="absolute w-full h-full object-cover" src="https://picsum.photos/550/300"
                  alt="Sunset in the mountains"
                />
                <div className="absolute w-full h-full bg-gray-700 opacity-75" />
                <div className="absolute w-full h-full flex items-center justify-end p-8 sm:p-16 md:p-8 lg:p-16">
                  <h2
                    className="uppercase text-3xl sm:text-4xl md:text-2xl lg:text-3xl text-white font-bold text-right"
                  >
                    Inițiativa
                    <br />
                    <span className="text-yellow-400">Împreună</span>
                    <br />
                    <span className="text-yellow-400">împotriva</span>
                    <br />
                    <span className="text-yellow-400">COVID-19</span>
                  </h2>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">voluntar.md</div>
                <p className="text-gray-700 text-base">
                  Platforma care conectează persoanele care au nevoie de ajutor cu cele care doresc să ajute.
                </p>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  )
}