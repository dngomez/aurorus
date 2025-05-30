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

export interface DishType {
  name: string
  shortDescription: string
  longDescription: string
  image: string
  price: number
  category: string
}

export interface BookStateType {
  location: string
  locationOptions: LocationOptionsType[]
  time: string
  timeOptions: string[]
  people: number
  peopleOptions: number[]
  date: Date | undefined
  today: Date
  endDate: Date
}

export interface BookActionType {
  type: string
  payload: any
}

export type DialogVariantType = "success" | "error"

export interface DialogStateType {
  isOpen: boolean
  message: string
  variant: DialogVariantType
}
