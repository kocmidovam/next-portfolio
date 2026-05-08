// Component Props Types

export type ProjectCardProps = {
  imgUrl: string
  title: string
  description: string
  gitUrl: string
  previewUrl: string
}

export type ProjectTagProps = {
  name: string
  value: string
  onClick: (value: string) => void
  isSelected: boolean
}

export type TabButtonProps = {
  active: boolean
  selectTab: () => void
  children: string[] | string
}

export type NavLinkProps = {
  href: string
  title: string
}

export type Project = {
  id: number
  titleKey: string
  descriptionKey: string
  image: string
  tag: string[]
  gitUrl: string
  previewUrl: string
}

// Analytics Types

export type GoogleAnalyticsProps = {
  GA_MEASUREMENT_ID: string
}
