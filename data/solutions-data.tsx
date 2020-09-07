import covidCell from '../images/covid-cell.png'
import girl from '../images/girl-pressing-door-buttons.jpeg'
import helpPeople from '../images/help-people.jpeg'
import helpSvg from '../images/ajut.svg'
import covidSvg from '../images/covid.svg'
import moldovaSvg from '../images/moldova.svg'

export const solutionsData = [
  {
    title: 'voluntar.md',
    description: 'Platforma care conectează persoanele care au nevoie de ajutor cu cele care doresc să ajute.',
    image: girl,
    icon: moldovaSvg,
  },
  {
    title: 'info.c19.md',
    description: 'Portal informativ cu privire la situația creată de COVID-19 în Moldova.',
    image: covidCell,
    icon: covidSvg,
  },
  {
    title: 'ajut.md',
    description:
      'Platforma care sprijină societatea civilă și implementarea proiectelor civice prin colectarea de materiale, bani și timp.',
    image: helpPeople,
    icon: helpSvg,
  },
]
