export const STRAPI_URL = import.meta.env.VITE_STRAPI_URL
export const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN
export const STRAPI_BOOK_TOKEN = import.meta.env.VITE_STRAPI_BOOK_TOKEN

export async function query(url: string) {
  const response = await fetch(`${STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })

  const json = await response.json()
  return json.data
}

export async function post(url: string, data: any) {
  const response = await fetch(`${STRAPI_URL}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_BOOK_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  })

  const json = await response.json()
  return json.data
}
