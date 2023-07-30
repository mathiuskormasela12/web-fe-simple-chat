// ========= Store
// import all packages
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST } from 'redux-persist'
import rootReducer from './features'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REGISTER, REHYDRATE, FLUSH, PAUSE, PURGE]
      }
    })
  }
})

export const persitor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
