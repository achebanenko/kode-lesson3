import React from 'react'
import PropTypes from 'prop-types'

import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { PageTemplate, Wrapper, HBox, Flex1, Divider } from '@ui/atoms'

export const SignIn = ({ value, status = '', changeNumber, signIn }) => (
  <PageTemplate>
    <Header title="Ввод номера телефона" />
    <Divider />
    <Flex1>
      <Wrapper>
        <HBox height={9} />
        <Body2>На указанный телефон будет выслан код подтверждения</Body2>
        <HBox height={20} />
        <TextField
          label="Номер телефона"
          startAdornment="+7"
          placeholder="9XXXXXXXXX"
          onChange={changeNumber}
          value={value}
        />
      </Wrapper>
      <RequestStatus
        status={status}
        loadingMessage="Телефон отправлется"
        successMessage="Номер успешно отправлен"
        failureMessage="Произошла неизвестная ошибка"
      />
    </Flex1>
    <Wrapper>
      <ButtonAccent onPress={signIn}>Отправить</ButtonAccent>
    </Wrapper>
  </PageTemplate>
)

SignIn.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  changeNumber: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
}
