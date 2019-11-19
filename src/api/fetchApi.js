/**
 * https://developer.todoist.com/rest/v1/
 */

const TOKEN_API = "a9ba770b55fa82c574ef925b19267701a2da2294"
const URL_API = "https://api.todoist.com/rest/v1/"

export default async (url, method = "GET", data) => {
  const response = await fetch(`${URL_API}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : undefined
  })

  if (response.ok) {
    return await response.json()
  } else {
    return Promise.reject(new Error(`Ошибка запроса ${response.status}`))
  }
}
