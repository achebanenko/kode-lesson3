import { connect } from 'react-redux'

import * as selectors from '@store/exchange/selectors'
import { Receipt } from './Receipt'

const mapStateToProps = state => ({
  currency1: selectors.getCurrency1(state),
  currency2: selectors.getCurrency2(state),
  amount1: selectors.getAmount1Value(state),
  amount2: selectors.getAmount2Value(state),
  deal: selectors.getDeal(state),
  dealSum: selectors.getDealSum(state),
  deliveryTimeFrom: selectors.getDeliveryTimeFromValue(state),
  deliveryTimeTo: selectors.getDeliveryTimeToValue(state),
  agreeToTerms: selectors.getAgreeToTermsValue(state),
})

export const ReceiptContainer = connect(
  mapStateToProps,
)(Receipt)