import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { routes } from '../../../routes'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Header, ButtonAccent, SelectField, CheckboxWithText, TextField } from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Exchange = (props) => {
  const { 
    status, exchange,
    handleSubmit, submitting, 
    history
  } = props
  console.log(props)
  return (
    <form onSubmit={handleSubmit(exchange)}>
      <PageTemplate>
        <Header icon="back" />
        <Flex1>
          <Wrapper>
            <Field
              name="country1"
              component={props => (
                <SelectField
                  {...props.input}
                  label="Страна 1"
                  onPress={() => history.push(routes.SELECT)}
                />
              )}
            />
            <Field
              name="country2"
              component={props => (
                <SelectField
                  {...props.input}
                  label="Страна 2"
                />
              )}
            />
            <Divider />
            <HBox />

            <Field
              name="amount1"
              component={props => (
                <TextField
                  {...props.input}
                  label="Российский рубль (RUB)"
                  endAdornment="₽"
                />
              )}
            />
            <HBox />
            <Field
              name="amount2"
              component={props => (
                <TextField
                  {...props.input}
                  label="Фунт стерлингов (GBP)"
                  endAdornment="£"
                />
              )}
            />
            <HBox />
            <Field
              name="time"
              component={props => (
                <DeliveryTime
                  {...props.input}
                  fromValue="10:00"
                  toValue="20:00"
                  fromAction={() => undefined}
                  toAction={() => undefined}
                  tip="Выберите время доставки"
                />
              )}
            />
            <HBox />
            <Field
              name="terms"
              component={props => (
                <CheckboxWithText
                  {...props.input}
                  
                >
                  Со всеми условиями согласен, возможно вторая строка
                </CheckboxWithText>
              )}
            />
          </Wrapper>
        </Flex1>
        <Wrapper>
          <ButtonAccent 
            loading={submitting}
            onPress={handleSubmit(exchange)}
          >
          Отправить
          </ButtonAccent>
        </Wrapper>
      </PageTemplate>
    </form>
  )
}

Exchange.propTypes = {
  status: PropTypes.string.isRequired,
  exchange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired, 
  submitting: PropTypes.bool,
}
