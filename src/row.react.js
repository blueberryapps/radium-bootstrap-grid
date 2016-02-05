import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import {row, clearfix} from './grid';

@Radium
export default class Row extends Component {

  static propTypes = {
    children:  RPT.node,
    className: RPT.string,
    style:     RPT.object
  }

  render() {
    const {className, children, style} = this.props;

    return (
      <div className={className} style={[row, style]}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
