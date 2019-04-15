import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { HBox } from '@ui/atoms'
import { ButtonAccent } from '@ui/molecules'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Button = styled.button`
  padding: 10px;
  flex: 1 1 33%;
  background: none;
  border: none;
  outline: none;
  &:not(.main) {
    color: ${({theme}) => theme.pallete.silver}
  }
  &.main:not(.delimeter) {
    border: 3px solid ${({theme}) => theme.pallete.silver};
  }
  &.delimeter {
    flex-basis: 20px;
    &.main:before {
      content: ":";
    }
  }
`

export class Timing extends Component {
  constructor(props) {
    super(props)

    const now = new Date()

    this.state = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
    }
  }

  decHours = () => this.setState({
    hours: this.state.hours === 0 ? 23 : this.state.hours - 1
  })
  decMinutes = () => this.setState({
    minutes: this.state.minutes === 0 ? 59 : this.state.minutes - 1
  })
  incHours = () => this.setState({
    hours: this.state.hours === 23 ? 0 : this.state.hours + 1
  })
  incMinutes = () => this.setState({
    minutes: this.state.minutes === 59 ? 0 : this.state.minutes + 1
  })

  render() {
    const { dialog } = this.props

    const formatNumber = number => ("0" + number).slice(-2)

    return (
      <>
        <HBox/>
        <Container>
          <Button onClick={this.decHours}>{formatNumber(this.state.hours === 0 ? 23 : this.state.hours - 1)}</Button>
          <Button className="delimeter"/>
          <Button onClick={this.decMinutes}>{formatNumber(this.state.minutes === 0 ? 59 : this.state.minutes - 1)}</Button>

          <Button className="main">{formatNumber(this.state.hours)}</Button>
          <Button className="delimeter main" />
          <Button className="main">{formatNumber(this.state.minutes)}</Button>

          <Button onClick={this.incHours}>{formatNumber(this.state.hours === 23 ? 0 : this.state.hours + 1)}</Button>
          <Button className="delimeter"/>
          <Button onClick={this.incMinutes}>{formatNumber(this.state.minutes === 59 ? 0 : this.state.minutes + 1)}</Button>
        </Container>

        <HBox height={20} />
        <ButtonAccent 
          disabled={!dialog}
          onPress={() => dialog(`${formatNumber(this.state.hours)} : ${formatNumber(this.state.minutes)}`)}
        >
          Ок
        </ButtonAccent>
      </>
    )
  }
}

Timing.propTypes = {
  dialog: PropTypes.func,
}