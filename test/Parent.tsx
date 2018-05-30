import * as React from 'react';
import connect from '../src';
import Children from './Children';

class Parent extends React.Component<any, any> {
  public render() {
    const { title, toogle } = this.props;
    const text = ({
      0: 'close',
      1: 'open',
    })[toogle];

    return (
      <div>
        <h1>{title}:{text}</h1>
        <Children />
      </div>
    );
  }
}

export default connect(
  ['toogleStore'],
  ({ toogleStore }) => ({
    toogle: toogleStore.toogle,
  }),
)(Parent);
