// eslint-disable-next-line
const serviceId = process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_ID
// eslint-disable-next-line
const getApiKey = process.env.NEXT_PUBLIC_MICRO_CMS_GET_API_KEY
export const baseUrl = `https://${serviceId}.microcms.io/api/v1`

export const params = (method: string, body?: {}) => {
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
