import * as React from 'react';

export const withProps = (mapDepsToProps) =>
  (Component) => (props) =>
    <Component {...mapDepsToProps(props)} {...props} />;