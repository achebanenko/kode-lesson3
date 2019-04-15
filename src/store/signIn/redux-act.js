import { createAction, createReducer } from 'redux-act';

const initialState = { status: '', value: '' }

export const changeNumber = createAction((value, status) => ({value, status}))
export const resetState = createAction((value, status) => ({value, status}))
export const start = createAction((value, status) => ({value, status}))
export const done = createAction((value, status) => ({value, status}))
export const failure = createAction((value, status) => ({value, status}))

export const reducer = createReducer({
  [changeNumber]: (state, payload) => ({ ...state, value: payload.value}),
  [resetState]: (state) => ({ ...state, status: '' }),
  [start]: (state) => ({ ...state, status: 'loading' }),
  [done]: (state) => ({ ...state, status: 'success' }),
  [failure]: (state) => ({ ...state, status: 'failure' }),
}, initialState)