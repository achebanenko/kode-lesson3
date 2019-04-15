import React from 'react'
import PropTypes from 'prop-types'

import { routes } from '../../../routes'

import { PageTemplate, Wrapper, HBox, Flex1, Divider } from '@ui/atoms'
import { Header, ButtonAccent, SelectField, CheckboxWithText, TextField } from '@ui/molecules'
import { Convertation, DeliveryTime, Timing } from '@ui/organisms'
import { Modal } from '@ui/pages'

export const Exchange = ({
  history,
  
  country1,
  country2,
  currency1,
  currency2,

  amount1,
  changeAmount1,
  amount2,
  changeAmount2,
  deal,
  changeDealSum,

  deliveryTimeFrom,
  changeDeliveryTimeFrom,
  deliveryTimeTo,
  changeDeliveryTimeTo,
  modal,
  dialog,
  toggleModal,

  agreeToTerms,
  changeAgreeToTerms,

  status,
  exchange,
}) => {

  return (
    <PageTemplate>
      <Header icon="back" action={() => history.push(routes.CONFIRM)} />
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
            currency1={currency1}
            currency2={currency2}
            deal={deal}
            changeDealSum={changeDealSum}

            render={({ value1, value2 }) => (
              <>
                <HBox />
                <TextField
                  label={`Валюта ${currency1}`}
                  value={value1}
                  onChange={changeAmount1}
                  tip={!country1 ? 'Выберите страну 1' : ''}
                  endAdornment="₽"
                  disabled={!country1}
                />
                <HBox />
                <TextField
                  label={`Валюта ${currency2}`}
                  value={value2}
                  onChange={changeAmount2}
                  tip={!country2 ? 'Выберите страну 2' : ''}
                  endAdornment="£"
                  disabled={!country2}
                />
              </>
            )}
          />

          <HBox />
          <DeliveryTime
            fromValue={deliveryTimeFrom}
            toValue={deliveryTimeTo}
            fromAction={() => toggleModal(true, changeDeliveryTimeFrom)}
            toAction={() => toggleModal(true, changeDeliveryTimeTo)}
          />

          {modal && (
            <Modal 
              toggleModal={toggleModal}
              header="Timing"
              component={
                <Timing 
                  dialog={dialog} 
                />
              }
            />
          )}

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
          disabled={status === 'loading'}
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
  deal: PropTypes.string,
  changeDealSum: PropTypes.func.isRequired,

  deliveryTimeFrom: PropTypes.string.isRequired,
  changeDeliveryTimeFrom: PropTypes.func.isRequired,
  deliveryTimeTo: PropTypes.string.isRequired,
  changeDeliveryTimeTo: PropTypes.func.isRequired,

  modal: PropTypes.bool.isRequired,
  dialog: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  toggleModal: PropTypes.func.isRequired,

  agreeToTerms: PropTypes.bool.isRequired,
  changeAgreeToTerms: PropTypes.func.isRequired,

  status: PropTypes.string.isRequired,
  exchange: PropTypes.func.isRequired,
}