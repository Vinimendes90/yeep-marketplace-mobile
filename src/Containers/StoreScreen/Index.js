import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import showOneStore from '@/Services/Store/showOne'

// import fetchOneUserService from '@/Services/User/FetchOne'

// import { Container } from './styles';


const StoreScreen = () => {
    const [store, setStore] = useState({});
    
    useEffect(() => {
        async function fetchStore() {
            try {
                const store = await showOneStore(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYwNTM4NDM3N30.A4duAetiU63OT0bsfmSiNwcOu-ex-K-8BfKrEWVo60M');
            } catch (error) {
                console.log({error});
            }
        }
        fetchStore()
    }, [])

    return <View><Text>Store Screen</Text></View>;
}

export default StoreScreen;