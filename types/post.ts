export type Post = {
  slug: string
  data: {
    title: string
    description: string
    image: string
    categories: string[]
    created_date: string
  }
  content: string
}
