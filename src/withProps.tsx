import * as React from 'react';
import { IStoresToProps, IReactComponent } from 'mobx-react';

export const withProps = (mapDepsToProps: IStoresToProps<{}>) =>
  (Component: IReactComponent): IReactComponent => (props) =>
    <Component {...mapDepsToProps(props, {}, {})} {...props} />;
