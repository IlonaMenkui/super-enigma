import React from 'react';

import { Svg, Wrap, Circle } from './styles';

function Circular() {
  return (
    <Wrap>
      <Svg viewBox="0 0 100 100">
        <Circle />
      </Svg>
    </Wrap>
  );
}

export default Circular;
