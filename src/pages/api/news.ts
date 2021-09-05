import { params, baseUrl } from './'

// type News = {
//   title: string
//   imageUrl: string
//   content: string
// }

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
