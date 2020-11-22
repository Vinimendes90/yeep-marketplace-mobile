import api, { handleError } from '@/Services'

export default async (storeId, token) => {
  if (!storeId) {
    return handleError({ message: 'store id is required' })
  }

  try {
      const response = await api.get(`stores/${storeId}`, {}, {
        authorization: `Bearer ${token}`
      })

      return response.data;
  } catch (error) {
    return handleError({ message: error })
  }
}
