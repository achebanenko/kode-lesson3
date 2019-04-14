import { connect } from 'react-redux'

import { selectCountry1, selectCountry2 } from '@store/exchange/thunks'
import { SelectCountry } from './SelectCountry'

export const SelectCountryContainer = connect(
  null,
  { selectCountry1, selectCountry2 },
)(SelectCountry)