import React from 'react'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'

export const SelectCountry = ({
  history,
  location,
  selectCountry1,
  selectCountry2
}) => {
  
  let handleSelect
  if(location.state.name === 'country1') handleSelect = selectCountry1
  else if(location.state.name === 'country2') handleSelect = selectCountry2
  
  return (
    <PageTemplate>
      <ModalHeader action={history.goBack}>
        <SearchInput onChange={console.log} />
      </ModalHeader>
      <HBox />

      <CountriesList
        title={'История поиска'}
        list={[
          { title: 'Российская Федерация', id: 'RUB' },
          { title: 'Соединенные Штаты Америки', id: 'USD' },
          { title: 'Великобритания', id: 'GBP' },
        ]}
        selectCountry={handleSelect}
      />

      <SearchStatus status="initial" />
    </PageTemplate>
  )
}