import React from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';
/**
 * <Component dangerouslyIgnoreProps={{data: {}}}/>
 */
export default class Component extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    const oldProps = Object.assign(this.props, {dangerouslyIgnoreProps: null});
    const newProps = Object.assign(nextProps, {dangerouslyIgnoreProps: null});
    return !shallowEqual(oldProps, newProps) || !shallowEqual(this.state, nextState);
  }
}
