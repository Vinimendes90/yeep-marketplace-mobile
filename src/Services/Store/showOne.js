import api, { handleError } from '@/Services'

export default async (storeId, token) => {
  if (!storeId) {
    return handleError({ message: 'store id is required' })
  }

  try {
      const response = await api.get(`stores/${storeId}`)
      console.log({response});

    //   return response
  } catch (error) {
    console.log(error);
    return handleError({ message: error })
  }
}
