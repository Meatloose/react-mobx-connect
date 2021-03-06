import { inject, observer, IStoresToProps, IReactComponent } from 'mobx-react';
import { selector } from './selector';
import { withProps } from './withProps';

const connect = (dependencies: string[], mapDepsToProps: IStoresToProps<any>) =>
  (Component: IReactComponent) =>
    inject(selector(dependencies))(observer(withProps(mapDepsToProps)(Component)));

export default connect;
