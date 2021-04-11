export interface Solution {
  slug: string
  title: string
  long_title: string
  website: string
  github_repository: string
  description: string
  long_description: string
  image: string
  icon: string
  status: string | null
  main_theme: string | null
  tags: string[]
  launch_date: string | null
  created_date: string
  scope: string
  report: string | null
}
