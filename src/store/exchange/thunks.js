
import * as actions from './actions'


export const exchange = (values) => async (dispatch) => {
  
  dispatch(actions.start())

  try {
    console.log(values)
  
    //dispatch(actions.done())
    //dispatch(actions.resetState())
  } catch (e) {
    dispatch(actions.failure())
  }
}
