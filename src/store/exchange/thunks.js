import { push } from 'connected-react-router'

import { routes } from '../../routes'
import * as actions from './actions'
//import {} from './selectors'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const exchange = () => async (dispatch, getState) => {
  dispatch(actions.start())
  
  try {
    
    await delay(1000)

    dispatch(actions.succeed())

    dispatch(push(routes.RECEIPT))

  } catch (e) {
    dispatch(actions.errored())
  }
}


export const selectCountry1 = (id) => (dispatch) => {
  dispatch(actions.changeCountry1(id))
  dispatch(push(routes.EXCHANGE))
}

export const selectCountry2 = (id) => (dispatch) => {
  dispatch(actions.changeCountry2(id))
  dispatch(push(routes.EXCHANGE))
}