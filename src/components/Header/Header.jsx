import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Button, Tabs, Tab } from '@material-ui/core'
import './Header.css'
import { Link } from "react-router-dom";
import { HEADER_TABS as tabs } from '../../App.constants'

const HeaderTab = ({ path, title }) => (
  <Tab component={"button"} label={title} to={path} component={Link} />
)

export const Header = () => {
  return (
    <Paper className="tabs">
      <Tabs centered>
        {tabs.map(HeaderTab)}
      </Tabs>
    </Paper>
  )
}

export default Header;
