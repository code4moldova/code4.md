import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkDirective from 'remark-directive'
import remark2rehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import visit from 'unist-util-visit'
import h from 'hastscript'
import merge from 'deepmerge'
import { defaultSchema } from 'hast-util-sanitize'

const schema = merge(defaultSchema, { tagNames: ['pdf'] })

const processor = unified()
  // Markdown to mdast
  .use(remarkParse)
  // Allow shortcodes
  .use(remarkDirective)
  .use(htmlDirectives)
  // GitHub Flavored Markdown
  .use(remarkGfm)
  // Add id attribute to heading tags
  .use(remarkSlug)
  // mdast to hast
  .use(remark2rehype, { allowDangerousHtml: true })
  // Parse again for html tags
  .use(rehypeRaw)
  // Sanitize
  .use(rehypeSanitize, schema)
  // hast to HTML
  .use(rehypeStringify)

export default function markdownToHtml(markdown: string): string {
  return processor.processSync(markdown).contents as string
}

function htmlDirectives() {
  return function (tree: any) {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], function (node: any) {
      const data = node.data || (node.data = {})
      const hast = h(node.name, node.attributes)
      data.hName = hast.tagName
      data.hProperties = hast.properties
    })
  }
}
