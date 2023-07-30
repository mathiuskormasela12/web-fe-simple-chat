// ========== Storage Types

export type CreateNoopStorage = () => ({
  getItem: () => Promise<unknown>
  setItem: (_key: unknown, value: unknown) => Promise<unknown>
  removeItem: () => Promise<unknown>
})
