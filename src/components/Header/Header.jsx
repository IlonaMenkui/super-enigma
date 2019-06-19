import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Button , Tabs } from '@material-ui/core'
import './Header.css'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Paper className="tabs">
      <Tabs centered>
        <Button className="tab">
          <Link className='link' to="/">Popular</Link>
        </Button >
        <Button className="tab">
          <Link className='link' to="/latest">Latest</Link>
        </Button >
        <Button className="tab">
        <Link className='link' to="/nowplaying">nowplaying</Link>
        </Button >
      </Tabs>
    </Paper>
  )
}

export default Header