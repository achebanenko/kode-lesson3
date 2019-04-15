import { createAction, createReducer } from 'redux-act';

const initialState = {
  country1: '',
  country2: '',
  currency1: '',
  currency2: '',
  amount1: '',
  amount2: '',
  deal: '',
  dealSum: '',
  deliveryTimeFrom: '',
  deliveryTimeTo: '',
  modal: false,
  dialog: '',
  agreeToTerms: false,
  status: '',
}

export const changeCountry1 = createAction((id, title) => ({id, title}))
export const changeCountry2 = createAction((id, title) => ({id, title}))
export const changeAmount1 = createAction((amount, deal) => ({amount, deal}))
export const changeAmount2 = createAction((amount, deal) => ({amount, deal}))
export const changeDealSum = createAction()

export const resetState = createAction((value, status) => ({value, status}))
export const start = createAction((value, status) => ({value, status}))
export const done = createAction((value, status) => ({value, status}))
export const failure = createAction((value, status) => ({value, status}))

export const reducer = createReducer({
  [changeCountry1]: (state, payload) => ({ ...state, currency1: payload.id, country1: payload.title}),
  [changeCountry2]: (state, payload) => ({ ...state, currency2: payload.id, country2: payload.title}),
  [changeAmount1]: (state, payload) => ({ ...state, amount1: payload.id, deal: payload.title}),
  [changeAmount2]: (state, payload) => ({ ...state, amount2: payload.id, deal: payload.title}),
  [changeDealSum]: (state, payload) => ({ ...state, deal: payload }),

  [resetState]: (state) => ({ ...state, status: '' }),
  [start]: (state) => ({ ...state, status: 'loading' }),
  [done]: (state) => ({ ...state, status: 'success' }),
  [failure]: (state) => ({ ...state, status: 'failure' }),
}, initialState)