import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { getStatus } from '@store/exchange/selectors'
import { exchange } from '@store/exchange/thunks'
import { Exchange } from './Exchange'

const ExchangeReduxForm = reduxForm({
  form: 'exchange',
})(Exchange)

const mapStateToProps = state => ({
  status: getStatus(state),
})

export const ExchangeContainer = connect(
  mapStateToProps,
  { exchange },
)(ExchangeReduxForm)