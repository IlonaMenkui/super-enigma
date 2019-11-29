import React, { useState } from 'react';

import Cross from '../Icons/Cross';

import CloseWrapper from './style';

function CloseCross() {
  const [color, changeColor] = useState('gray');

  return (
    <CloseWrapper
      onMouseOver={() => changeColor('black')}
      onMouseOut={() => changeColor('gray')}
    >
      <Cross color={color} />
    </CloseWrapper>
  );
}

export default CloseCross;
