import fs from 'fs'
import { join } from 'path'
import grayMatter from 'gray-matter'

function getSlugs(directory: string) {
  const slugsDirectory = join(process.cwd(), directory)
  const slugs = fs.readdirSync(slugsDirectory)
  return slugs.map(slug => slug.replace(/\.json$/, ''))
}

function getDirectory(directory: string) {
  const fullDirectory = join(process.cwd(), directory)
  return getSlugs(directory)
    .map(slug => {
      const fullPath = join(fullDirectory, `${slug}.json`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { content } = grayMatter(fileContents)
      return { ...JSON.parse(content), slug }
    })
    .sort((a: any, b: any) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime())
}

export function getStaff() {
  return getDirectory('data/staff')
}

// TODO: Maybe generate community from all who contributed in GitHub?
export function getCommunity() {
  return getDirectory('data/community')
}

export function getSponsors() {
  return getDirectory('data/sponsors')
}

export function getApplications() {
  return getDirectory('data/applications')
}

export function getApplicationsSlugs() {
  return getSlugs('data/applications')
}
