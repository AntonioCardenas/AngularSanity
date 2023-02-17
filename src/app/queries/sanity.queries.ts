import groq from 'groq'

const postFields = groq`
  _id,
  title,
  date,
  content,
  coverImage,
  category,
  "slug": slug.current,
  "author": author->{name, picture},
`
const postPreview = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  category,
  "slug": slug.current,
  "author": author->{name},
`


export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postPreview}
}`

export const SpecificPost = groq`
*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] { content,
    ${postFields}
}`


export interface Author {
  name?: string
  picture?: any
}


export interface Post {
  _id: string
  title?: string
  category?: any
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

