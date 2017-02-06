import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import { row, clearfix } from './grid';

@Radium
export default class Row extends React.PureComponent {

  static propTypes = {
    children:  RPT.node,
    style:     RPT.object
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div style={[row, style]} {...props}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
