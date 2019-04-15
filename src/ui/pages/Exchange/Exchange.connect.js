import { connect } from 'react-redux'

import * as selectors from '@store/exchange/selectors'
import * as actions from '@store/exchange/redux-act'
import { exchange } from '@store/exchange/thunks'
import { Exchange } from './Exchange'

const mapStateToProps = state => ({
  country1: selectors.getCountry1(state),
  country2: selectors.getCountry2(state),
  currency1: selectors.getCurrency1(state),
  currency2: selectors.getCurrency2(state),
  amount1: selectors.getAmount1Value(state),
  amount2: selectors.getAmount2Value(state),
  deal: selectors.getDeal(state),
  dealSum: selectors.getDealSum(state),
  deliveryTimeFrom: selectors.getDeliveryTimeFromValue(state),
  deliveryTimeTo: selectors.getDeliveryTimeToValue(state),
  modal: selectors.getModal(state),
  dialog: selectors.getDialog(state),
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
    changeDealSum: actions.changeDealSum,
    changeDeliveryTimeFrom: actions.changeDeliveryTimeFrom,
    changeDeliveryTimeTo: actions.changeDeliveryTimeTo,
    toggleModal: actions.toggleModal,
    changeAgreeToTerms: actions.changeAgreeToTerms,
    resetExchange: actions.resetExchange,
    exchange
  },
)(Exchange)