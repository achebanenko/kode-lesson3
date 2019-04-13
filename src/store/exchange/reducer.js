import * as types from './types'

const initialState = {
  country1: '',
  country2: '',
  amount1: '',
  amount2: '',
  deliveryTimeFrom: '',
  deliveryTimeTo: '',
  agreeToTerms: false,
  status: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_COUNTRY_1:
      return {
        ...state,
        country1: action.payload.value,
      }
    case types.CHANGE_COUNTRY_2:
      return {
        ...state,
        country2: action.payload.value,
      }

    case types.CHANGE_AMOUNT_1:
      return {
        ...state,
        amount1: action.payload.value,
      }
    case types.CHANGE_AMOUNT_2:
      return {
        ...state,
        amount2: action.payload.value,
      }

    case types.CHANGE_DELIVERY_TIME_FROM:
      return {
        ...state,
        deliveryTimeFrom: action.payload.value,
      }
    case types.CHANGE_DELIVERY_TIME_TO:
      return {
        ...state,
        deliveryTimeTo: action.payload.value,
      }

    case types.CHANGE_AGREE_TO_TERMS:
      return {
        ...state,
        agreeToTerms: action.payload.value,
      }
    
    case types.RESET:
      return initialState
    
    case types.START:
      return {
        ...state,
        status: 'loading',
      }
    case types.SUCCEED:
      return {
        ...state,
        status: 'success',
      }
    case types.ERRORED:
      return {
        ...state,
        status: 'failure',
      }
    
    default:
      return state
  }
}