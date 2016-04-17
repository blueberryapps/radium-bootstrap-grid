import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import { column, columnHidden, columnOffset, columnPull, columnPush, columnWidth } from './grid';

@Radium
export default class Column extends Component {

  static propTypes = {
    children: RPT.node,
    lg:       RPT.number,
    lgHidden: RPT.bool,
    lgOffset: RPT.number,
    lgPull:   RPT.number,
    lgPush:   RPT.number,
    md:       RPT.number,
    mdHidden: RPT.bool,
    mdOffset: RPT.number,
    mdPull:   RPT.number,
    mdPush:   RPT.number,
    ms:       RPT.number,
    msHidden: RPT.bool,
    msOffset: RPT.number,
    msPull:   RPT.number,
    msPush:   RPT.number,
    sm:       RPT.number,
    smHidden: RPT.bool,
    smOffset: RPT.number,
    smPull:   RPT.number,
    smPush:   RPT.number,
    style:    RPT.object,
    xs:       RPT.number,
    xsHidden: RPT.bool,
    xsOffset: RPT.number,
    xsPull:   RPT.number,
    xsPush:   RPT.number
  }

  render() {
    const {
      children,
      lg,
      lgHidden,
      lgOffset,
      lgPull,
      lgPush,
      md,
      mdHidden,
      mdOffset,
      mdPull,
      mdPush,
      ms,
      msHidden,
      msOffset,
      msPull,
      msPush,
      sm,
      smHidden,
      smOffset,
      smPull,
      smPush,
      style,
      xs,
      xsHidden,
      xsOffset,
      xsPull,
      xsPush,
      ...props
    } = this.props;

    return (
      <div
        style={[
          column,
          lg && columnWidth['lg'][lg],
          lgHidden && columnHidden['lg'],
          lgOffset && columnOffset['lg'][lgOffset],
          lgPull && columnPull['lg'][lgPull],
          lgPush && columnPush['lg'][lgPush],
          md && columnWidth['md'][md],
          mdHidden && columnHidden['md'],
          mdOffset && columnOffset['md'][mdOffset],
          mdPull && columnPull['md'][mdPull],
          mdPush && columnPush['md'][mdPush],
          ms && columnWidth['ms'][ms],
          msHidden && columnHidden['ms'],
          msOffset && columnOffset['ms'][msOffset],
          msPull && columnPull['ms'][msPull],
          msPush && columnPush['ms'][msPush],
          sm && columnWidth['sm'][sm],
          smHidden && columnHidden['sm'],
          xs && columnWidth['xs'][xs],
          smOffset && columnOffset['sm'][smOffset],
          smPull && columnPull['sm'][smPull],
          smPush && columnPush['sm'][smPush],
          xsHidden && columnHidden['xs'],
          xsOffset && columnOffset['xs'][xsOffset],
          xsPull && columnPull['xs'][xsPull],
          xsPush && columnPush['xs'][xsPush],
          style
        ]}
        {...props}
      >
        {children}
      </div>
    );
  }
}
