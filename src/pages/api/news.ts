// type News = {
//   title: string
//   imageUrl: string
//   content: string
// }

// eslint-disable-next-line
const serviceId = process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_ID
// eslint-disable-next-line
const getApiKey = process.env.NEXT_PUBLIC_MICRO_CMS_GET_API_KEY
const baseUrl = `https://${serviceId}.microcms.io/api/v1`

const params = (method: string, body?: {}) => {
  if (body) {
    return {
      method: 'POST',
      headers: {}
    }
  } else {
    return {
      method: method,
      headers: {
        'X-API-KEY': getApiKey
      }
    }
  }
}

export const fetchAllNews = async (): Promise<any[]> => {
  // @ts-ignore
  const data = await fetch(`${baseUrl}/news`, params('GET'))
    .then((res) => res.json())
    .catch((e) => console.log('error occured', e))

  if (data?.contents) return data.contents
  return ['empty data']
}

export const fetchNewsById = async (contentId: string | string[] | undefined) => {
  // @ts-ignore
  const data = await fetch(`${baseUrl}/news/${contentId}`, params('GET'))
    .then((res) => res.json())
    .catch((e) => console.log('error occured', e))
  // @ts-ignore
  if (data) return data
  return { message: 'empty data' }
}
