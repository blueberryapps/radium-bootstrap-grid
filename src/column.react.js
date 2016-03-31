import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import { column, columnHidden, columnWidth } from './grid';

@Radium
export default class Column extends Component {

  static propTypes = {
    children: RPT.node,
    lg:       RPT.number,
    lgHidden: RPT.bool,
    md:       RPT.number,
    mdHidden: RPT.bool,
    ms:       RPT.number,
    msHidden: RPT.bool,
    sm:       RPT.number,
    smHidden: RPT.bool,
    style:    RPT.object,
    xs:       RPT.number,
    xsHidden: RPT.bool
  }

  render() {
    const { children, lg, lgHidden, md, mdHidden, ms, msHidden, sm, smHidden, style, xs, xsHidden, ...props } = this.props;

    return (
      <div
        style={[
          column,
          lg && columnWidth['lg'][lg],
          lgHidden && columnHidden['lg'],
          md && columnWidth['md'][md],
          mdHidden && columnHidden['md'],
          ms && columnWidth['ms'][ms],
          msHidden && columnHidden['ms'],
          sm && columnWidth['sm'][sm],
          smHidden && columnHidden['sm'],
          style,
          xs && columnWidth['xs'][xs],
          xsHidden && columnHidden['xs']
        ]}
        {...props}
      >
        {children}
      </div>
    );
  }
}
