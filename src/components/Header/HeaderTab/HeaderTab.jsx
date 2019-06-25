import React from 'react'
import PropTypes from 'prop-types'

import { Tab } from '@material-ui/core'

import './header-tab.css'

const HeaderTab = ({ path, title }, index) => (
    <Tab key={index} className="tab" label={title} to={path} />
)

HeaderTab.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default HeaderTab
