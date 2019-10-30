import React,{ useCallback, useState } from 'react';

import { ProgressBar, Filler, ProgressWrap } from './styles';

function Circular() {
  const [persentage, setPersentage] = useState(0);

  const memoizedsetPersentage = useCallback(
    value => {
      setPersentage(value);
    },
    [setPersentage],
  );

  const memoizedresetPersentage = useCallback(
    () => {
      setPersentage(0);
    },
    [setPersentage],
  );

  (function () {
    if (persentage === 0) {
      memoizedsetPersentage(10);
    }
    const id = setInterval(setPersentageInterval, 60);
    function setPersentageInterval() {
      if (persentage >= 100) {
        clearInterval(id);
        memoizedresetPersentage();
      } else {
        memoizedsetPersentage(persentage + 10);
      }
    }
  }());

  return (
    <ProgressWrap>
      <ProgressBar>
        <Filler width={persentage} />
      </ProgressBar>
    </ProgressWrap>
  );
}

export default Circular;
