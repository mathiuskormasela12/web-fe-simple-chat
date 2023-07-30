// ========== Root Reducer
// import all packages
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from '../storage'

// import all redux slices
import authSlice from './auth/auth.slice'
import chatSlice from './chat-slice/chat.slice'

const rootPersistConfig = {
  key: 'root',
  storage,
  version: 1,
  blacklist: ['chatReducer']
}

const rootReducer = combineReducers({
  authReducer: authSlice,
  chatReducer: chatSlice
})

export default persistReducer(rootPersistConfig, rootReducer)
