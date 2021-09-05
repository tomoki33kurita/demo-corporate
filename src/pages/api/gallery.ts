import { params, baseUrl } from './'

export const fetchAllGalleries = async (): Promise<any[]> => {
  // @ts-ignore
  const data = await fetch(`${baseUrl}/gallery`, params('GET'))
    .then((res) => res.json())
    .catch((e) => console.log('error occured', e))
  if (data?.contents) return data.contents
  return ['empty data']
}

export const fetchGalleryById = async (contentId: string | string[] | undefined) => {
  // @ts-ignore
  const data = await fetch(`${baseUrl}/gallery/${contentId}`, params('GET'))
    .then((res) => res.json())
    .catch((e) => console.log('error occured', e))
  if (data) return data
  return ['empty data']
}
