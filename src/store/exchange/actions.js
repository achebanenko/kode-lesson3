import * as types from './types'

export const changeCountry1 = ({id,title}) => ({
  type: types.CHANGE_COUNTRY_1,
  payload: {
    id,
    title,
  }
})
export const changeCountry2 = ({id,title}) => ({
  type: types.CHANGE_COUNTRY_2,
  payload: {
    id,
    title,
  }
})

export const changeAmount1 = value => ({
  type: types.CHANGE_AMOUNT_1,
  payload: {
    value,
  }
})
export const changeAmount2 = value => ({
  type: types.CHANGE_AMOUNT_2,
  payload: {
    value,
  }
})

export const changeDeliveryTimeFrom = value => ({
  type: types.CHANGE_DELIVERY_TIME_FROM,
  payload: {
    value,
  }
})
export const changeDeliveryTimeTo = value => ({
  type: types.CHANGE_DELIVERY_TIME_TO,
  payload: {
    value,
  }
})

export const changeAgreeToTerms = value => ({
  type: types.CHANGE_AGREE_TO_TERMS,
  payload: {
    value,
  }
})

export const resetExchange = () => ({
  type: types.RESET,
})

export const start = () => ({
  type: types.START,
})
export const succeed = () => ({
  type: types.SUCCEED,
})
export const errored = () => ({
  type: types.ERRORED,
})