import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Button , Tabs } from '@material-ui/core'
import './Header.css'
import { Link } from "react-router-dom";
import { HEADER_TABS as tabs } from '../../app.constance.js';

const HeaderTab = ({ path, linkName }) => (
  <Button className="tab">
      <Link className='link' to={path}>
          {linkName}
      </Link>
  </Button >
);

export const Header = () => {
  return (
    <Paper className="tabs">
      <Tabs centered>
        {tabs.map((tab) => <HeaderTab path={tab.path} name={tab.name} />)}
      </Tabs>
    </Paper>
  )
}

export default Header;