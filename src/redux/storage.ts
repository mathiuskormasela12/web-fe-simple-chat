// =========== Storage
// import all modules
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { type CreateNoopStorage } from './storage.types'

const createNoopStorage: CreateNoopStorage = () => ({
  async getItem () {
    return await Promise.resolve(null)
  },
  async setItem (_key, value) {
    return await Promise.resolve(value)
  },
  async removeItem () {
    await Promise.resolve()
  }
})

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage
