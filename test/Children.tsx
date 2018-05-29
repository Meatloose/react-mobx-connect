import * as React from 'react';
import connect from '../src';

class Children extends React.Component<any, any> {
  public render() {
    const { toogle, handleToggle } = this.props;
    const text = ({
      0: 'open',
      1: 'close',
    })[toogle];

    return (
      <div>
        <button onClick={handleToggle}>{text}</button>
      </div>
    );
  }
}

export default connect(
  ['toogleStore'],
  ({ toogleStore }) => ({
    handleToggle: toogleStore.handleToggle,
    toogle: toogleStore.toogle,
  }),
)(Children);
