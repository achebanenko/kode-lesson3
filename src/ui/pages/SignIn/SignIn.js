import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const SignIn = (props) => {
  const { 
    status, signIn,
    handleSubmit, submitting
  } = props

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <PageTemplate>
        <Header title="Ввод номера телефона" />
        <Divider />
        <Flex1>
          <Wrapper>
            <HBox height={9} />
            <Body2>На указанный телефон будет выслан код подтверждения</Body2>
            <HBox height={20} />
            <Field
              name="number" 
              component={props => (
                <TextField 
                  {...props.input}
                  label="Номер телефона"
                  startAdornment="+7"
                  placeholder="9XXXXXXXXX"
                  status={status}
                />
              )}
            />
          </Wrapper>
          <RequestStatus
            status={status}
            loadingMessage="Телефон отправляется"
            successMessage="Номер успешно отправлен"
            failureMessage="Произошла неизвестная ошибка"
          />
        </Flex1>
        <Wrapper>
          <ButtonAccent 
            loading={submitting}
            onPress={handleSubmit(signIn)}
          >
            Отправить
          </ButtonAccent>
        </Wrapper>
      </PageTemplate>
    </form>
  )
}

SignIn.propTypes = {
  status: PropTypes.string.isRequired,
  signIn: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired, 
  submitting: PropTypes.bool,
}
