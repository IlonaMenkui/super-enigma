import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonWrapper } from './style';

const HeaderTab = ({
  value, onClickTab, tabs,
}) => (
  tabs.map((tab, index) => (
    <ButtonWrapper>
      <Button
        onClick={e => onClickTab(e, index)}
        key={value}
        index={index}
        value={value}
      >
        {tab.TITLE}
      </Button>
    </ButtonWrapper>
  ))
);

HeaderTab.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default HeaderTab;
