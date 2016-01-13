import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import {row, clearfix} from './grid';

@Radium
export default class Row extends Component {

  static propTypes = {
    children: RPT.node,
    style:    RPT.object
  }

  render() {
    const {children, style} = this.props;

    return (
      <div style={[row, style]}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
