import React from 'react';

import { ProgressBar, Filler, ProgressWrap } from './styles';

export default class Circular extends React.PureComponent {
  constructor() {
    super();
    this.state = { persentage: 5 };
  }

  componentDidUpdate() {
    const { persentage } = this.state;
    if (persentage > 100) {
      this.clearPersentage();
    }
  }

  clearPersentage = () => {
    this.setState({ persentage: 5 });
  }

  render() {
    const { persentage } = this.state;
    this.timerId = setInterval(() => this.setState({ persentage: persentage + 10 }), 70);
    return (
      <ProgressWrap>
        <ProgressBar>
          <Filler width={persentage} />
        </ProgressBar>
      </ProgressWrap>
    );
  }
}
