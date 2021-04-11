import fs from 'fs'
import { join } from 'path'
import grayMatter from 'gray-matter'

function getDirectory(directory: string) {
  const staffDirectory = join(process.cwd(), directory)
  const slugs = fs.readdirSync(staffDirectory)
  return slugs
    .map(slug => {
      const realSlug = slug.replace(/\.json$/, '')
      const fullPath = join(staffDirectory, `${realSlug}.json`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { content } = grayMatter(fileContents)
      return JSON.parse(content)
    })
    .sort((a: any, b: any) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime())
}

export function getAllStaff() {
  return getDirectory('data/staff')
}

// TODO: Maybe generate community from all who contributed in GitHub?
export function getAllCommunity() {
  return getDirectory('data/community')
}

export function getAllSponsors() {
  return getDirectory('data/sponsors')
}
