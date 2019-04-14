import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { getStatus } from '@store/confirm/selectors'
import { confirmNumber } from '@store/confirm/thunks'
import { SignInConfirm } from './SignInConfirm'

const SignInConfirmReduxForm = reduxForm({
  form: 'signin-confirm',
})(SignInConfirm)

const mapStateToProps = state => ({
  status: getStatus(state),
})

export const SignInConfirmContainer = connect(
  mapStateToProps,
  { confirmNumber },
)(SignInConfirmReduxForm)
