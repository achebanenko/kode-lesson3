import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const SignInConfirm = ({ status, confirmNumber, handleSubmit, submitting }) => {
  
  return (
    <form onSubmit={handleSubmit(confirmNumber)}>
      <PageTemplate>
        <Header title="Введите код" />
        <Divider />
        <Flex1>
          <Wrapper>
            <HBox height={9} />
            <Body2>На указанный телефон выслан код подтверждения</Body2>
            <HBox height={20} />
            <Field 
              name="code"
              component={props => (
                <TextField
                  {...props.input}
                  label="Код"
                  placeholder="1234"
                  status={status}
                />
              )}
            />
          </Wrapper>
          <RequestStatus
            status={status}
            loadingMessage="Код отправляется"
            failureMessage="Произошла неизвестная ошибка"
            successMessage="Код успешно отправлен"
          />
        </Flex1>
        <Wrapper>
          <ButtonAccent loading={submitting} onPress={handleSubmit(confirmNumber)}>Отправить</ButtonAccent>
        </Wrapper>
      </PageTemplate>
    </form>
  )
}

SignInConfirm.propTypes = {
  status: PropTypes.string.isRequired,
  confirmNumber: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}
