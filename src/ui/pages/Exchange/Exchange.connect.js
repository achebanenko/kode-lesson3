import { connect } from 'react-redux'

import * as selectors from '@store/exchange/selectors'
import * as actions from '@store/exchange/actions'
import { exchange } from '@store/exchange/thunks'
import { Exchange } from './Exchange'

const mapStateToProps = state => ({
  country1: selectors.getCountry1Value(state),
  country2: selectors.getCountry2Value(state),
  amount1: selectors.getAmount1Value(state),
  amount2: selectors.getAmount2Value(state),
  deal: selectors.getDeal(state),
  deliveryTimeFrom: selectors.getDeliveryTimeFromValue(state),
  deliveryTimeTo: selectors.getDeliveryTimeToValue(state),
  agreeToTerms: selectors.getAgreeToTermsValue(state),
  status: selectors.getStatus(state),
})

export const ExchangeContainer = connect(
  mapStateToProps,
  { 
    changeCountry1: actions.changeCountry1,
    changeCountry2: actions.changeCountry2,
    changeAmount1: actions.changeAmount1,
    changeAmount2: actions.changeAmount2,
    changeDeliveryTimeFrom: actions.changeDeliveryTimeFrom,
    changeDeliveryTimeTo: actions.changeDeliveryTimeTo,
    changeAgreeToTerms: actions.changeAgreeToTerms,
    resetExchange: actions.resetExchange,
    exchange
  },
)(Exchange)