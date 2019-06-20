import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Tabs } from '@material-ui/core'
import { HEADER_TABS as tabs } from '../../App.constants'
import HeaderTab from './HeaderTab/HeaderTab'
import './Header.css'

export const Header = () => {
  return (
    <Paper className="tabs">
      <Tabs centered>
        {tabs.map(HeaderTab)}
      </Tabs>
    </Paper>
  )
}

export default Header
