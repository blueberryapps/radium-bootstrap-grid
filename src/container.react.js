import Component from 'react-pure-render/component'
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react'
import {container, clearfix} from './grid';

@Radium
export default class Container extends Component {

  static propTypes = {
    children:  RPT.node,
    className: RPT.string,
    style:     RPT.object
  }

  render() {
    const {className, children, style} = this.props;

    return (
      <div className={className} style={[container, style]}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
