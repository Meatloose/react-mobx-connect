import { inject, observer } from 'mobx-react';
import { selector } from './selector';
import { withProps } from './withProps';

export default function connect(dependencies: string[], mapDepsToProps) {
  return (Component) =>
    inject(selector(dependencies))(observer(withProps(mapDepsToProps)(Component)));
}