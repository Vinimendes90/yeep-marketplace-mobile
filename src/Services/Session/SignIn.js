import api, { handleError } from '@/Services'

export default async (payload) => {
    
    const { email, password } = payload

    if (!email || !password) {
        return handleError({ message: 'email and password is required' })
    }

    try {
        const { data } = await api.post('sessions', { email, password } )

        return data
    } catch (error) {
        console.log(error);
        return handleError({ message: error })
    }
}
