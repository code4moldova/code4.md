import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remark2rehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const processor = unified()
  // Markdown to mdast
  .use(remarkParse)
  // Add id attribute to heading tags
  .use(remarkSlug)
  // mdast to hast
  .use(remark2rehype, { allowDangerousHtml: true })
  // Parse again for html tags
  .use(rehypeRaw)
  // Sanitize
  .use(rehypeSanitize)
  // hast to HTML
  .use(rehypeStringify)

export default function markdownToHtml(markdown: string): string {
  return processor.processSync(markdown).contents as string
}
