import Radium from 'radium';
import React, {PropTypes as RPT} from 'react'
import { container, clearfix } from './grid';

@Radium
export default class Container extends React.PureComponent {

  static propTypes = {
    children:  RPT.node,
    style:     RPT.object
  }

  render() {
    const { children, style, ...props } = this.props;

    return (
      <div style={[container, style]} {...props}>
        {children}
        <div style={clearfix} />
      </div>
    );
  }
}
