import * as types from './types'

const initialState = {
  status: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.START:
      return {
        ...state,
        status: 'loading',
      }
    case types.DONE:
      return {
        ...state,
        status: 'success',
      }
    case types.FAILURE:
      return {
        ...state,
        status: 'failure',
      }
    case types.RESET:
      return {
        value: '',
        status: '',
      }
    default:
      return state
  }
}