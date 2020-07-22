import React from 'react'
import { Container } from '../components/container'
import { Row } from '../components/row'
import { Column } from '../components/column'

export function GetInvolved() {
  return (
    <section className="py-5 md:py-16">
      <Container>

        <h1 className="text-3xl mb-5 md:mb-10" style={{ fontFamily: 'Space Mono' }}>
          Implică-te
        </h1>

        <Row>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="border-4 border-blue-500 p-8 h-full">
              <div className="flex flex-col lg:flex-row items-center mb-6">
                <img
                  className="w-20 mb-4 lg:mb-0"
                  src="https://s3-alpha-sig.figma.com/img/17b6/7c3d/93de0673623a1fbaea1c236abfe915e6?Expires=1595808000&Signature=MY0YGoYtU~CdTglTaAGkndLWn8kILx1HPXatIy~X9GD0NWiABFz~P-nIr-df~Mm2DfxxnJuRoqQ-uHcoHxkI7YCAi-k2f28iu9hHN3ONtTsdGyUQozCTSbXZyiIaz7aTPOXHwBw-lSBTMnhVW-sbJa6pz79LC0u4Anb2~S5zDTgfPiG23Hi~MRb4EHda-U7HY8avYGR4~uXl5A3cnKRRZ-csoSBsujAj-cMh2ojWA-pLhnawy0YYA3m9dNvTn2D6JTNHHATOk2nWkhOd0qxTkyJPv-Wz8ReLVT0V~YpRC2959m6b18YRrOKmW5WTcugl1oZ6zdQHGuq2E001Wlj~rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h2 className="text-3xl font-medium text-blue-500 lg:ml-6">Fii voluntar!</h2>
              </div>
              <p>
                Te poți implica prin cunoștințele și aptitudinile tale de programator, cercetare sau comunicare în
                crearea
                aplicațiilor civice, ce vor face Moldova țara pe care ni-o dorim cu toții!
              </p>
            </div>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="border-4 border-indigo-700 p-8 h-full">
              <div className="flex flex-col lg:flex-row items-center mb-6">
                <img
                  className="w-20 mb-4 lg:mb-0"
                  src="https://s3-alpha-sig.figma.com/img/e4c0/570d/452e346e898ba5b3de876b277c4cfa6e?Expires=1595808000&Signature=V7xhiuAWR8qRsewIiHbZ20aO4EXD3YrMe5viKMPjH8npcerU6WgcgOgl-XYyuNKKA-I6pcP2GHqhl7li5iIK3zjgIRjvQgwlbhTKex1jknmU~kbrr11dMmBm97TDzR3OFNR1BpPBNnQntf0PPISYapUTmx1imjAov~BFMXK6gt9-YfLzyqClrKLTTXGfhndAylpcp7BIXxrYlW0cOepfdZOtMWi1US8V566vJWkQc~PP3aoZF-cvH8jDHL5yaayxNcEX-tQrKSXT~3zZYk0aB0JkpL8D7EaGdbTMIfLACFxZUOIGEf7eEpIYnyKkupPy9Uco6izOBzIpDdh~vF2H4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h2 className="text-3xl font-medium text-indigo-700 lg:ml-6">Donează!</h2>
              </div>
              <p>
                Dacă vrei să susții cercetările desfășurate și aplicațiile pe care le implementăm poți veni cu o
                contribuţie, oricât de mică a fi este utilă şi mult apreciată.
              </p>
            </div>
          </Column>
          <Column className="mb-4 w-full md:w-1/3">
            <div className="border-4 border-blue-900 p-8 h-full">
              <div className="flex flex-col lg:flex-row items-center mb-6">
                <img
                  className="w-20 mb-4 lg:mb-0"
                  src="https://s3-alpha-sig.figma.com/img/ae54/76db/47f2c69c8759139498c00582c71712e7?Expires=1595808000&Signature=ShcwR9B2y-K28KhZiIQQL34PoAo3FhzH~O5i~UgqdBAT-UuFSbKbk-H17WjI1fwDFEn89o~lsl31pSZtgpkudj47KQP558KG2V06umIiFsjDiEQu03yEjR7y8f1L16PlXSKGlaIp6~ufqn1sjtf1GLgh2BF2NU~ijs3H7qmvlrGORrNAh2PohjUCOwqvgvjc8kFXTaRTn-g7htbnqphGB83EYMzJ0xqqAY4fWDTWSxT3mXIRpBDhBY3Hp9lOs6ggw82Rx48G-SuaTDjWX6T8TcP2pteaeeiex3J4XoZCUgSqgc2W37F5tR46zVsdoojQhpY7KRHtwgt8q-zitUb2TA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
                />
                <h2 className="text-3xl font-medium text-blue-900 lg:ml-6">Devino partener!</h2>
              </div>
              <p>
                Devino una dintre companiile care încurajează voluntariatul în IT și alătură-te ca partener local sau
                național programelor: Civic Labs și Tech for Social Good.
              </p>
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  )
}