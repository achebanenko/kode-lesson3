import React from 'react'

import { HLevel4 } from '@ui/atoms/Typography'
import { PageTemplate, Wrapper, HBox, Flex1 } from '@ui/atoms'
import { Header } from '@ui/molecules'

export const Receipt = () => {
  return (
    <PageTemplate>
      <Header />
        <Flex1>
          <Wrapper>
            <HLevel4>Receipt</HLevel4>
            <HBox/>

          </Wrapper>
        </Flex1>
    </PageTemplate>
  )
}