import fs from 'fs'
import { join } from 'path'
import grayMatter from 'gray-matter'
import markdownToHtml from './markdown-to-html'

function getSlugs(directory: string, extension = 'json') {
  const slugsDirectory = join(process.cwd(), directory)
  const slugs = fs.readdirSync(slugsDirectory)
  return slugs.map(slug => slug.replace(new RegExp(`\\.${extension}`), ''))
}

const jsonFormatSort = (a: any, b: any) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime()
const mdFormatSort = (a: any, b: any) =>
  new Date(a.data.created_date).getTime() - new Date(b.data.created_date).getTime()
const jsonDataFormat = (ctx: GetDirectoryReturn) => ({
  ...JSON.parse(ctx.content),
  slug: ctx.slug,
})
const mdDataFormat = (ctx: GetDirectoryReturn): GetDirectoryReturn => ({
  ...ctx,
  data: {
    ...ctx.data,
    created_date: ctx.data.created_date.toISOString(),
  },
  content: markdownToHtml(ctx.content),
})

type GetDirectoryReturn = ReturnType<typeof getDirectory>[number]

function getDirectory(directory: string, extension = 'json') {
  const fullDirectory = join(process.cwd(), directory)
  return getSlugs(directory, extension).map(slug => {
    const fullPath = join(fullDirectory, `${slug}.${extension}`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = grayMatter(fileContents)
    return { slug, data, content }
  })
}

export function getStaff() {
  return getDirectory('data/staff').map(jsonDataFormat).sort(jsonFormatSort)
}

// TODO: Maybe generate community from all who contributed in GitHub?
export function getCommunity() {
  return getDirectory('data/community').map(jsonDataFormat).sort(jsonFormatSort)
}

export function getSponsors() {
  return getDirectory('data/sponsors').map(jsonDataFormat).sort(jsonFormatSort)
}

export function getApplications() {
  return getDirectory('data/applications').map(jsonDataFormat).sort(jsonFormatSort)
}

export function getApplicationsSlugs() {
  return getSlugs('data/applications')
}

export function getPosts() {
  return getDirectory('data/posts', 'md').map(mdDataFormat).sort(mdFormatSort)
}

export function getPostsSlugs() {
  return getSlugs('data/posts', 'md')
}
