import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Tabs, Tab } from '@material-ui/core'

import { HEADER_TABS as tabs } from '../../App.constants'
import HeaderTab from './HeaderTab/HeaderTab'

import './Header.css'

export class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    // event.preventDefault()
    this.setState({ value })
    console.log(value)
  }

  render() {
    return (
      <Paper className="tabs">
        <Tabs value={this.state.value}
          centered
          onChange={this.handleChange}
          indicatorColor={"primary"}>
          {tabs.map(HeaderTab)}
        </Tabs>
      </Paper>
    )
  }
}

export default Header
