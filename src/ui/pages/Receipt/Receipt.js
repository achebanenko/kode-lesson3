import React from 'react'
import PropTypes from 'prop-types'

import { HLevel4 } from '@ui/atoms/Typography'
import { PageTemplate, Wrapper, HBox, Flex1 } from '@ui/atoms'
import { Header } from '@ui/molecules'

export const Receipt = ({
  number,
  currency1,
  currency2,
  amount1,
  amount2,
  deal,
  dealSum,
  deliveryTimeFrom,
  deliveryTimeTo,
  agreeToTerms,
}) => {
  return (
    <PageTemplate>
      <Header title={new Date().toDateString()} />
        <Flex1>
          <Wrapper>
            <HLevel4>Receipt</HLevel4>
            <HBox/>
            <div>{deal}</div>

            {
              deal === 'sell'
                ? (<>
                  <div>{currency1} {amount1}</div>
                  <div>get</div>
                  <div>{currency2} {dealSum}</div>
                </>) : false
            }

            {
              deal === 'buy'
                ? (<>
                  <div>{currency2} {amount2}</div>
                  <div>pay</div>
                  <div>{currency1} {dealSum}</div>
                </>) : false
            }

            <HBox/>
            <div>From {deliveryTimeFrom || '00 : 00'} to {deliveryTimeTo || '23 : 59'}</div>

            <HBox/>
            <div>Signin number {number}</div>
            <div>Agree to terms {agreeToTerms ? 'true' : 'false'}</div>
          </Wrapper>
        </Flex1>
    </PageTemplate>
  )
}

Receipt.propTypes = {
  number: PropTypes.string,
  currency1: PropTypes.string,
  currency2: PropTypes.string,
  amount1: PropTypes.string,
  amount2: PropTypes.string,
  deal: PropTypes.string.isRequired,
  dealSum: PropTypes.string.isRequired,
  deliveryTimeFrom: PropTypes.string,
  deliveryTimeTo: PropTypes.string,
  agreeToTerms: PropTypes.bool.isRequired,
}