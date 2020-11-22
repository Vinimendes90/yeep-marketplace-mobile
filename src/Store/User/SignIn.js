import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
  } from '@thecodingmachine/redux-toolkit-wrapper'
  import SignIn from '@/Services/Session/SignIn'
  
  export default {
    initialState: buildAsyncState('signIn'),
    action: buildAsyncActions('user/signIn', SignIn),
    reducers: buildAsyncReducers({
        errorKey: 'signIn.error', // Optionally, if you scoped variables, you can use a key with dot notation
        loadingKey: 'signIn.loading',
    }),
  }
  