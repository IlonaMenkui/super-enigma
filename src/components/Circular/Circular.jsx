import React from 'react';

import { Svg, Wrap, Circle } from './styles';

function Circular() {
  return (
    <Wrap>
      <Svg>
        <Circle transform="rotate(-90, 95, 95)" />
      </Svg>
    </Wrap>
  );
}

export default Circular;
