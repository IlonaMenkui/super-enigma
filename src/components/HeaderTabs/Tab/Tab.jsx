import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonWrapper } from './style';

const Tab = ({
  title, value, onClickTab, index,
}) => (
  <ButtonWrapper>
    <Button
      onClick={e => onClickTab(e, index)}
      key={value}
      index={index}
      value={value}
    >
      {title}
    </Button>
  </ButtonWrapper>
);

Tab.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
