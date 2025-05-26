import { RootNode } from "node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer"

export interface EventType {
  id: number
  documentId: string
  date: string
  time: string
  name: string
  description: RootNode[]
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
}

export interface BookType {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  date: string
  time: string
  comment: any
  people: number
  email: string
  phone: string
  confirmed: boolean
  code: string
  location: string
}

export interface LocationOptionsType {
  value: string
  label: string
}
