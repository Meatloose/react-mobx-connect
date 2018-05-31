# React connector to MobX

This simple HOC easily connects MobX to React components. 
You can `connect` MobX to every `ComponentClass | ClassicComponentClass | StatelessComponent` components without `@inject` & `@observer`.

## Usage

* install

```bash
npm install mobx-react-connect
```

* import the connect module

```jsx
// Toggle.jsx
import connect from 'mobx-react-connect';

// [ComponentClass | StatelessComponent | ClassicComponentClass]
class Toggle extends React.Component {
  render() {
    const { toggle, handleToggle } = this.props;

    return (
      <div>
        <h1>toggle state: {({ 0: 'close', 1: 'open' })[toggle]}</h1>
        <button onClick={handleToggle}>{({ 0: 'open', 1: 'close' })[toggle]}</button>
      </div>
    );
  }
}

export default connect(
  // inject stores as a string array
  ['toggleStore'],
  // map store to props
  (stores) => ({
    toggle: stores.toggleStore.toggle,
    handleToggle: stores.toggleStore.handleToggle,
  }),
)(Toggle);

// toggleStore.js
import { observable, action } from 'mobx';

class ToggleStore {
  @observable toggle = 0;

  @action.bound
  handleToggle() {
    this.toggle = +!this.toggle;
  }
}

export default new ToggleStore();

// setup App
import { Provider } from 'mobx-react';
import Toggle from './container/Toggle';
import toggleStore from './store/toggleStore';

ReactDOM.render(
  <Provider {...{ toggleStore }}>
    <Toggle />
  </Provider>,
  MOUNT_NODE,
);
```