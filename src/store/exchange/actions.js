import * as types from './types'

export const resetState = () => ({
  type: types.RESET,
})

export const start = () => ({
  type: types.START,
})
export const done = () => ({
  type: types.DONE,
})
export const failure = () => ({
  type: types.FAILURE,
})
