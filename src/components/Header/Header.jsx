import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Button , Tabs } from '@material-ui/core'
import styles from './Header.css'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="tabs">
      <Tabs centered>
        <Button  className="tab">
          <Link to="/">Popular</Link>
        </Button >
        <Button  className="tab">
          <Link to="/latest">Latest</Link>
        </Button >
        <Button  className="tab">
        <Link to="/nowplaying">nowplaying</Link>
        </Button >
      </Tabs>
    </div>
  )
}

export default Header