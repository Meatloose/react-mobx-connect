import * as React from 'react';
import connect from '../src';

class Children extends React.Component<any, any> {
  public render() {
    const { toggle, handleToggle } = this.props;
    const text = ({
      0: 'open',
      1: 'close',
    })[toggle];

    return (
      <div>
        <button onClick={handleToggle}>{text}</button>
      </div>
    );
  }
}

export default connect(
  ['toggleStore'],
  ({ toggleStore }) => ({
    handleToggle: toggleStore.handleToggle,
    toggle: toggleStore.toggle,
  }),
)(Children);
