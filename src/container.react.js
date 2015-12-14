import Component from 'react-pure-render/component'
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react'
import {container, clearfix} from './grid';

@Radium
export default class Container extends Component {

  static propTypes = {
    children: RPT.node
  }

  render() {
    const {children} = this.props;

    return (
      <div style={container}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
