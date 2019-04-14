import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { getStatus } from '@store/signIn/selectors'
import { signIn } from '@store/signIn/thunks'
import { SignIn } from './SignIn'

const SignInReduxForm = reduxForm({
  form: 'signin',
})(SignIn)

const mapStateToProps = state => ({
  status: getStatus(state),
})

export const SignInContainer = connect(
  mapStateToProps,
  { signIn },
)(SignInReduxForm)