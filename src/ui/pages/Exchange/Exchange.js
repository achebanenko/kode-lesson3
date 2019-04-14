import React from 'react'
import PropTypes from 'prop-types'

import { routes } from '../../../routes'

import { PageTemplate, Wrapper, HBox, Flex1, Divider } from '@ui/atoms'
import { Header, ButtonAccent, SelectField, CheckboxWithText, TextField } from '@ui/molecules'
import { Convertation, DeliveryTime } from '@ui/organisms'

export const Exchange = ({
  history,
  
  country1,
  country2,

  amount1,
  changeAmount1,
  amount2,
  changeAmount2,
  deal,

  deliveryTimeFrom,
  changeDeliveryTimeFrom,
  deliveryTimeTo,
  changeDeliveryTimeTo,

  agreeToTerms,
  changeAgreeToTerms,

  status,
  reset,
  exchange,
}) => {

  return (
    <PageTemplate>
      <Header icon="back" action={history.goBack} />
      <Flex1>
        <Wrapper>
          <SelectField
            label="Страна 1"
            value={country1}
            onPress={() => history.push(routes.SELECT, { name: 'country1' })}
          />
          <SelectField
            label="Страна 2"
            value={country2}
            onPress={() => history.push(routes.SELECT, { name: 'country2' })}
          />

          <Divider />

          <Convertation 
            amount1={amount1}
            amount2={amount2}
            deal={deal}
            render={({ value1, value2 }) => (
              <>
                <HBox />
                <TextField
                  label="Российский рубль (RUB)"
                  value={value1}
                  onChange={changeAmount1}
                  tip=""
                  endAdornment="₽"
                />
                <HBox />
                <TextField
                  label="Фунт стерлингов (GBP)"
                  value={value2}
                  onChange={changeAmount2}
                  tip=""
                  endAdornment="£"
                />
              </>
            )}
          />

          <HBox />
          <DeliveryTime
            fromValue={deliveryTimeFrom}
            toValue={deliveryTimeTo}
            fromAction={() => undefined} //{changeDeliveryTimeFrom}
            toAction={() => undefined} //{changeDeliveryTimeTo}
            tip="Выберите время получения"
          />

          <HBox />
          <CheckboxWithText 
            value={agreeToTerms}
            onPress={changeAgreeToTerms}
          >
            Со всеми условиями согласен, возможно вторая строка
          </CheckboxWithText>
        </Wrapper>
      </Flex1>
      <Wrapper>
        <ButtonAccent 
          loading={status === 'loading'}
          disabled={status === 'success' || status === 'failure'}
          onPress={exchange}
        >
          Отправить
        </ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
}

Exchange.propTypes = {
  country1: PropTypes.string.isRequired,
  changeCountry1: PropTypes.func.isRequired,
  country2: PropTypes.string.isRequired,
  changeCountry2: PropTypes.func.isRequired,

  amount1: PropTypes.string.isRequired,
  changeAmount1: PropTypes.func.isRequired,
  amount2: PropTypes.string.isRequired,
  changeAmount2: PropTypes.func.isRequired,

  deliveryTimeFrom: PropTypes.string.isRequired,
  changeDeliveryTimeFrom: PropTypes.func.isRequired,
  deliveryTimeTo: PropTypes.string.isRequired,
  changeDeliveryTimeTo: PropTypes.func.isRequired,

  agreeToTerms: PropTypes.bool.isRequired,
  changeAgreeToTerms: PropTypes.func.isRequired,

  status: PropTypes.string.isRequired,
  exchange: PropTypes.func.isRequired,
}