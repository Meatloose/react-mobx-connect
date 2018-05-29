import { inject, observer, IStoresToProps, IReactComponent } from 'mobx-react';
import { selector } from './selector';
import { withProps } from './withProps';

export default function connect(dependencies: string[], mapDepsToProps: IStoresToProps<any>) {
  return (Component: IReactComponent) =>
    inject(selector(dependencies))(observer(withProps(mapDepsToProps)(Component)));
}
