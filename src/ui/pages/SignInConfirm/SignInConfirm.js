import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, Wrapper, HBox, Flex1, Divider } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'

export const SignInConfirm = ({ value, status, changeCode, confirmNumber }) => (
  <PageTemplate>
    <Header title="Введите код" />
    <Divider />
    <Flex1>
      <Wrapper>
        <HBox height={9} />
        <Body2>На указанный телефон выслан код подтверждения</Body2>
        <HBox height={20} />
        <TextField
          label="Код"
          placeholder="1234"
          onChange={changeCode}
          value={value}
          status={status}
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
      <ButtonAccent 
        loading={status === 'loading'} 
        disabled={status === 'success'} 
        onPress={confirmNumber}
      >
        Отправить
      </ButtonAccent>
    </Wrapper>
  </PageTemplate>
)

SignInConfirm.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  changeCode: PropTypes.func.isRequired,
  confirmNumber: PropTypes.func.isRequired,
}
