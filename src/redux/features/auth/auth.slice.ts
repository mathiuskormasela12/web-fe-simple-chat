// ========== Auth Slice
// import all packages
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IAuthPayload, type IAuthSliceStates } from './auth.slice.types'

const initialState: IAuthSliceStates = {
  accessToken: '',
  refreshToken: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken (state, action: PayloadAction<IAuthPayload>) {
      state.accessToken = action.payload.data.accessToken
      state.refreshToken = action.payload.data.refreshToken
    },
    resetToken (state) {
      state.accessToken = ''
      state.refreshToken = ''
    }
  }
})

export const { setToken, resetToken } = authSlice.actions
export default authSlice.reducer
