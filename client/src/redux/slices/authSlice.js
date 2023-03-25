import { createSlice } from '@reduxjs/toolkit'

const userAuthFromSession = () => {
  const isAuth = sessionStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true
  }

  return false
}

const initialState = {
  isAuth: userAuthFromSession(),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true
      sessionStorage.setItem('isAuth', true)
    },
    unauthenticateUser: (state) => {
      state.isAuth = false
      sessionStorage.setItem('isAuth', false)
    },
  },
})

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer
