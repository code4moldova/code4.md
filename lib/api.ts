import fs from 'fs'
import { join } from 'path'
import grayMatter from 'gray-matter'

export function getAllStaff() {
  const personTemplatePath = join(process.cwd(), '.forestry/front_matter/templates/person.yml')
  const personTemplateContent = fs.readFileSync(personTemplatePath, 'utf8')
  const { data: personTemplate } = grayMatter(personTemplateContent)

  return personTemplate.pages
    .map((path: string) => {
      const fullPath = join(process.cwd(), path)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { content } = grayMatter(fileContents)
      return JSON.parse(content)
    })
    .sort((a: any, b: any) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime())
}
