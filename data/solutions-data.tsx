import covidCell from '../images/covid-cell.png'
import girl from '../images/girl-pressing-door-buttons.jpeg'
import helpPeople from '../images/help-people.jpeg'
import helpSvg from '../images/ajut.svg'
import covidSvg from '../images/covid.svg'
import moldovaSvg from '../images/moldova.svg'

export const solutionsData = [
  {
    slug: 'voluntar-md',
    title: 'voluntar.md',
    longTitle: 'voluntar.md',
    website: 'https://voluntar.md/',
    githubRepository: 'https://github.com/code4moldova/voluntar-web',
    description: 'Platforma care conectează persoanele care au nevoie de ajutor cu cele care doresc să ajute.',
    longDescription:
      '<p class="mb-2">Odată cu izbucnirea pandemiei, a crescut numărul de persoane aflate în situații vulnerabile. Echipa de voluntari “Inițiativa Împreună Împotriva COVID19” vin în ajutor acestor oameni cu produse alimentare conectându-i cu voluntarii care pot oferi livrare.</p>' +
      '<p class="mb-2"><strong>Problema:</strong> Un număr considerabil de pesoane aflate în situații de criză (nu au acces la produse alimentare, de igienă și acces la îngrijire medicală, etc.) nu beneficiază de suport.</p>' +
      '<p class="mb-2"><strong>Soluția:</strong> Platformă online care conectează persoanele aflate în situații de criză și societatea civilă care ajută cu produse alimentare, de igienă și transport.</p>' +
      '<ul class="list-disc list-inside pl-5">' +
      '<li>Toate solicitările telefonice a persoanelor vulnerabile sunt înregistrate pe această platformă</li>' +
      '<li>Orice voluntar care este dispus să ajute cu livrarea pachetelor și oferirii de transport poate să se înregistreze pe platformă</li>' +
      '<li>Voluntarul primește acces la platformă și poate prelua solicitări</li>' +
      '<li>Progresul fiecărei sarcini și statutul solicitărilor pot fi ușor gestionate și monitorizate</li>' +
      '</ul>',
    image: girl,
    icon: moldovaSvg,
    status: 'finisat',
    mainTheme: 'covid19',
    tags: ['social', 'voluntariat'],
    launchDate: '20.04.2020',
    scope:
      'Oferi sprijin Departamentului de Asistență Socială în oferirea suportului de bunuri pentru persoanele nevoiașe.',
    report:
      'https://www.scribd.com/embeds/475134849/content?start_page=1&view_mode=scroll&access_key=key-vIda9HDZrb4iIfYrVbow',
  },
  {
    slug: 'info-c19-md',
    title: 'info.c19.md',
    longTitle: 'Centru de informare Coronavirus Moldova',
    website: 'http://info.c19.md/',
    githubRepository: 'https://github.com/code4moldova/covid19md-info',
    description: 'Portal informativ cu privire la situația creată de COVID-19 în Moldova.',
    longDescription:
      '<p class="mb-2"><strong>Problema:</strong> Lipsa informației legate de COVID-19 și dezinformarea publicului pe rețele de socializare / în mediul online.</p>' +
      '<p class="mb-2"><strong>Soluția:</strong> Portal informativ cu privire la situația creată de COVID-19 în Moldova.</p>' +
      '<p class="mb-2">Platforma reprezintă datele din diferite aspecte:</p>' +
      '<ul class="list-disc list-inside pl-5">' +
      '<li>Datele statistice despre COVID-19 în Moldova preluate din comunicatele de presă a Ministerul Sănătății, Muncii și Protecției Sociale și Organizația Mondială de Sănătate;</li>' +
      '<li>Vizualizarea acestor date cu ajutorul graficilor, histogramelor, diagramelor;</li>' +
      '<li>Recomandări și măsuri de precauție;</li>' +
      '<li>Întrebări și răspunsuri frecvente despre COVID-19;</li>' +
      '<li>Modificări legislative în legătură cu situația epidemiologică la COVID-19.</li>' +
      '</ul>',
    image: covidCell,
    icon: covidSvg,
    status: 'finisat',
    mainTheme: 'covid19',
    tags: ['social', 'voluntariat'],
    launchDate: '17.03.2020',
    scope:
      'Oferi suport informațional populației din surse sigure; combaterea dezinformării la situația legată de COVID-19 în Moldova.',
    report: null,
  },
  {
    slug: 'ajut-md',
    title: 'ajut.md',
    longTitle: 'ajut.md',
    website: 'http://ajut.md/',
    githubRepository: 'https://github.com/code4moldova/ajut.md',
    description:
      'Platforma care sprijină societatea civilă și implementarea proiectelor civice prin colectarea de materiale, bani și timp.',
    longDescription:
      '<p class="mb-2"><strong>Problema:</strong> Lipsa unei platforme care ar face public nevoile organizațiilor civice și la care ar conecta donatorii de bani, bunuri și timp.</p>' +
      '<p class="mb-2"><strong>Soluția:</strong> Platforma online care conectează donatorii la necesitățile organizațiilor din Moldova.</p>' +
      '<ul class="list-disc list-inside pl-5">' +
      '<li>ONG-ul odată înregistrat pe platformă își poate afișa nevoia materiale/bani/voluntariat;</li>' +
      '<li>Oricare personă poate dona bani, materiale sau timp pentru ONG-ul selectat</li>' +
      '<li>Pentru toate donațiile de bani se vor raporta cheltuielile.</li>' +
      '</ul>',
    image: helpPeople,
    icon: helpSvg,
    status: null,
    mainTheme: null,
    tags: ['social', 'voluntariat'],
    launchDate: null,
    scope:
      'Să sprijine societatea civilă și implementarea proiectelor sociale prin donații de bunuri, financiare și de timp.',
    report:
      'https://www.scribd.com/embeds/475136713/content?start_page=1&view_mode=scroll&access_key=key-bgUE95Bv6SwQixam7Myg',
  },
]
