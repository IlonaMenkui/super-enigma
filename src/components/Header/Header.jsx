import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Tabs } from '@material-ui/core'

import { HEADER_TABS as tabs } from '../../App.constants'
import HeaderTab from './HeaderTab/HeaderTab'

import './Header.css'

export class Header extends React.Component {

  constructor({ history }) {
    super()
    this.state = {
      value: 0
    }
    this.history = history
  }

  componentWillMount() {
    const { pathname } = this.history.location
    const currentTabIndex = tabs.findIndex(({ path }) =>  pathname === path)
    const newState =  {
      value: currentTabIndex
    }
    this.setState(newState)
  }

  handleChange = (event, value) => {
    this.history.push(tabs[value].path)
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

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default Header
