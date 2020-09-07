import React from 'react'
import { Container } from '../components/container'
import { Heading } from '../components/heading'

export function LegalBlock() {
  return (
    <section className="py-24">
      <Container>
        <Heading tag="h1" className="text-3xl mb-8">
          Legal
        </Heading>
        <p className="mb-16">
          Code for Moldova este o organizație non-guvernamentală independentă, neafiliată politic și apolitică,
          înființată în martie, 2020, al cărei scop este de a mobiliza tinerii profesioniști din domeniul IT, design,
          cercetare și comunicare să creeze instrumente digitale care ajută în soluționarea problemelor sociale în
          Republica Moldova.
        </p>

        <Heading tag="h1" className="text-3xl mb-8">
          Cod de conduită
        </Heading>
        <p>Acest document se bazează pe Codul de Conduită al Code for America.</p>
        <p>
          Comunitatea Code for Moldova își propune ca activitatea sa, în special forumurile și evenimentele, să reflecte
          următoarele:
        </p>
        <p>Reprezintă un mediu sigur și respectuos pentru toți participanții</p>
        <p>Fiecare contribuție este valoroasă în felul ei. Respectăm ideile, calitățile și contribuția fiecăruia.</p>
        <p>Nu presupuneți că toată lumea are aceeași experiență anterioară. Încurajați întrebările.</p>
        <p>
          Găsiți o manieră în care oamenii pot fi productivi cu calitățile și competențele pe care le au (tehnice sau
          nu) și energia fiecăruia.
        </p>
        <p>Folosiți exprimări ca “da/și”, în loc de “nu/dar”.</p>
        <p>Încurajați membrii și participanții să asculte pe cât de mult vorbesc.</p>
        <p>
          Încercați să construiți instrumente și tehnologii accesibile publicului. Vor fi prioritizate activitățile care
          sunt în avantajul utilizării de către publicul larg, iar nu individuale, private.
        </p>
        <p>
          Prioritizează accesul și exprimarea opiniilor de către grupurile care sunt, în mod traditional, excluse de la
          procesul civic.
        </p>
        <p>
          Depune eforturi pentru a se asigura de buna reprezentare a comunității în procesul de planificare, design și
          implementare a soluției tehnice. Acest lucru include încurajarea participării femeilor, minorităților și
          grupurilor în mod traditional marginalizate.
        </p>
        <p>
          Implică în mod activ în procesul de luare a deciziilor grupurile din comunitate și acelea care au expertiză pe
          subiectul în discuție.
        </p>
        <p>
          Se asigură că relațiile și conversațiile dintre membrii comunității, reprezentanții autorităților locale și
          partenerii comunității ramân respectuose, promovează participarea și productivitatea. Asigură un mediu în care
          oamenii nu sunt supuși discriminării sau hărțuirii.
        </p>
        <p>Code for Moldova este o organizație apolitică, și nu se va asocia cu niciun partid politic.</p>
        <p>
          Code for Moldova dezvoltă produse informatice open source. Nici un contribuitor nu este proprietarul
          proiectului la care a contribuit.
        </p>
        <p>
          Code for Moldova își rezervă dreptul de a cere oricui nu respectă această politică să nu mai participe în
          cadrul activităților, evenimentelor și forumurilor rețelei Code for Moldova.
        </p>
      </Container>
    </section>
  )
}
