(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var trs = (function (React,mobxReact) {
    'use strict';

    const selector = dependencies => store => dependencies.reduce((previousModel, currentModel) => Object.assign({}, previousModel, { [currentModel]: store[currentModel] }), {});

    const withProps = mapDepsToProps => Component => props => React.createElement(Component, Object.assign({}, mapDepsToProps(props, {}, {}), props));

    function connect(dependencies, mapDepsToProps) {
        return Component => mobxReact.inject(selector(dependencies))(mobxReact.observer(withProps(mapDepsToProps)(Component)));
    }

    return connect;

}(React,mobxReact));
