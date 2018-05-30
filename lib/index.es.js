import { createElement } from 'react';
import { inject, observer } from 'mobx-react';

const selector = dependencies => store => dependencies.reduce((previousModel, currentModel) => Object.assign({}, previousModel, { [currentModel]: store[currentModel] }), {});

const withProps = mapDepsToProps => Component => props => createElement(Component, Object.assign({}, mapDepsToProps(props, {}, {}), props));

function connect(dependencies, mapDepsToProps) {
    return Component => inject(selector(dependencies))(observer(withProps(mapDepsToProps)(Component)));
}

export default connect;
