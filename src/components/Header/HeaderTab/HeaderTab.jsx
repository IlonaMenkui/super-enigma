import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Tab } from '@material-ui/core'
import { HEADER_TABS as tabs } from '../../../App.constants'
import '../Header.css'

const HeaderTab = ({ path, title }) => (
    <Tab className="tab" component={"button"} label={title} to={path} component={Link} />
)

HeaderTab.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string
}

export default HeaderTab