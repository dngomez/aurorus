import { query, STRAPI_URL } from "./query"

export async function getHome() {
  const { title, description, cover } = await query(
    "home?populate[cover][fields][0]=url"
  )

  return { title, description, image: `${STRAPI_URL}${cover.url}` }
}
