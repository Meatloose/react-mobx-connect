# React connector to MobX

This simple HOC easily connects MobX to React components. 
You do not need to use `@inject` & `@observer` in every `Class | ClassicComponentClass | StatelessComponent` components.

## Usage

* install

```bash
npm install mobx-react-connect
```

* import the connect module

```jsx
// Toogle.js
import connect from 'mobx-react-connect';

const Toogle = ({ toogle, handleToggle }) => (
  <div>
    <h1>toogle state: {({ 0: 'close', 1: 'open' })[toogle]}</h1>
    <button onClick={handleToggle}>{({ 0: 'open', 1: 'close' })[toogle]}</button>
  </div>
);

export default connect(
  // inject stores as a string array
  ['toogleStore'],
  // map store to props
  (stores) => ({
    toogle: stores.toogleStore.toogle,
    handleToggle: stores.toogleStore.handleToggle,
  }),
)(Toogle);

// toggleStore.js
import { observable, action } from 'mobx';

class ToogleStore {
  @observable toogle = 0;

  @action.bound
  handleToggle() {
    this.toogle = +!this.toogle;
  }
}

export default new ToogleStore();

// setup App
import { Provider } from 'mobx-react';
import Toogle from './container/Toogle';
import toogleStore from './store/toggleStore';

ReactDOM.render(
  <Provider {...{ toogleStore }}>
    <Toogle />
  </Provider>,
  MOUNT_NODE,
);
```