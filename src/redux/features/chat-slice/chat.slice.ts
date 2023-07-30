// ========== Chat Slice
// import all packages
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IChatPayload, type IChatSliceStates } from './chat.slice.types'

const initialState: IChatSliceStates = {
  chats: []
}

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats (state, action: PayloadAction<IChatPayload>) {
      state.chats.push(...action.payload.data)
    }
  }
})

export const { setChats } = chatSlice.actions
export default chatSlice.reducer
