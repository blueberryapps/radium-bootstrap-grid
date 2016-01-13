import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import {column, columnWidth} from './grid';

@Radium
export default class Column extends Component {

  static propTypes = {
    children: RPT.node,
    large:    RPT.number,
    medium:   RPT.number,
    phone:    RPT.number,
    small:    RPT.number,
    style:    RPT.object,
    tablet:   RPT.number
  }

  render() {
    const {children, large, medium, phone, small, style, tablet} = this.props;

    return (
      <div
        style={[
          column,
          phone && columnWidth['xs'][phone],
          tablet && columnWidth['ms'][tablet],
          small && columnWidth['sm'][small],
          medium && columnWidth['md'][medium],
          large && columnWidth['lg'][large],
          style
        ]}
      >
        {children}
      </div>
    );
  }
}
