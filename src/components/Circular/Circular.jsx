import React, { useState } from 'react';

import { ProgressBar, Filler, ProgressWrap } from './styles';

function Circular() {
  const [percent, setPercentage] = useState(0);

  const setStatePercentage = value => {
    setPercentage(value);
  };

  const resetPercentage = () => {
    setPercentage(0);
  };

  (function () {
    if (percent === 0) {
      setStatePercentage(10);
    }
    const id = setInterval(setPercentageInterval, 60);
    function setPercentageInterval() {
      if (percent >= 100) {
        clearInterval(id);
        resetPercentage();
      } else {
        setStatePercentage(percent + 10);
      }
    }
  }());

  return (
    <ProgressWrap>
      <ProgressBar>
        <Filler width={percent} />
      </ProgressBar>
    </ProgressWrap>
  );
}

export default Circular;
