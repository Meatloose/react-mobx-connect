'use strict';

var React = require('react');
var mobxReact = require('mobx-react');

const selector = dependencies => store => dependencies.reduce((previousModel, currentModel) => Object.assign({}, previousModel, { [currentModel]: store[currentModel] }), {});

const withProps = mapDepsToProps => Component => props => React.createElement(Component, Object.assign({}, mapDepsToProps(props, {}, {}), props));

function connect(dependencies, mapDepsToProps) {
    return Component => mobxReact.inject(selector(dependencies))(mobxReact.observer(withProps(mapDepsToProps)(Component)));
}

module.exports = connect;
