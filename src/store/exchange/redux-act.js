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

export const changeCountry1 = createAction((currency, country) => ({currency, country}))
export const changeCountry2 = createAction((currency, country) => ({currency, country}))
export const changeAmount1 = createAction((amount, deal) => ({amount, deal}))
export const changeAmount2 = createAction((amount, deal) => ({amount, deal}))
export const changeDealSum = createAction()
export const changeDeliveryTimeFrom = createAction((deliveryTimeFrom, modal) => ({deliveryTimeFrom, modal}))
export const changeDeliveryTimeTo = createAction((deliveryTimeTo, modal) => ({deliveryTimeTo, modal}))
export const changeAgreeToTerms = createAction()
export const toggleModal = createAction((modal, dialog) => ({modal, dialog}))

export const resetExchange = createAction()
export const start = createAction((value, status) => ({value, status}))
export const succeed = createAction((value, status) => ({value, status}))
export const errored = createAction((value, status) => ({value, status}))

export const reducer = createReducer({
  [changeCountry1]: (state, payload) => ({ ...state, currency1: payload.currency, country1: payload.country}),
  [changeCountry2]: (state, payload) => ({ ...state, currency2: payload.currency, country2: payload.country}),
  [changeAmount1]: (state, payload) => ({ ...state, amount1: payload.amount, deal: 'sell'}),
  [changeAmount2]: (state, payload) => ({ ...state, amount2: payload.amount, deal: 'buy'}),
  [changeDealSum]: (state, payload) => ({ ...state, dealSum: payload }),
  [changeDeliveryTimeFrom]: (state, payload) => ({ ...state, deliveryTimeFrom: payload.deliveryTimeFrom, modal: false}),
  [changeDeliveryTimeTo]: (state, payload) => ({ ...state, deliveryTimeTo: payload.deliveryTimeTo, modal: false}),
  [changeAgreeToTerms]: (state, payload) => ({ ...state, agreeToTerms: payload }),
  [toggleModal]: (state, payload) => ({ ...state, modal: payload.modal, dialog: payload.dialog}),

  [resetExchange]: (state) => (initialState),
  [start]: (state) => ({ ...state, status: 'loading' }),
  [succeed]: (state) => ({ ...state, status: 'success' }),
  [errored]: (state) => ({ ...state, status: 'failure' }),
}, initialState)