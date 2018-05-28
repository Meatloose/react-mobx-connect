import * as React from 'react';
import { Provider } from 'mobx-react';
import toogleStore from './store';
import Parent from './Parent';

const store = {
  toogleStore,
};

export default class App extends React.Component<any, any> {
  render() {
    return (
        <Provider {...store}>
          <Parent title="toogle state" />
        </Provider>
    );
}
}
