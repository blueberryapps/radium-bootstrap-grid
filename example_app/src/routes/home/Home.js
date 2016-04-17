/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import { Column, Container, Row } from 'radium-bootstrap-grid';

function Home({ news }) {
  return (
    <div className={s.root}>
      <Container>
        <p>Note: Original bootstrap doesn't support 480px breakpoint.</p>

        <h2 className={s.h2}>Example: Stacked-to-horizontal</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column md={1} xs={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
          <Column md={1}>
            <div className={s.highlightColumn}>{'md={1}'}</div>
          </Column>
        </Row>
        <Row>
          <Column md={8}>
            <div className={s.highlightColumn}>{'md={8}'}</div>
          </Column>
          <Column md={4}>
            <div className={s.highlightColumn}>{'md={4}'}</div>
          </Column>
        </Row>
        <Row>
          <Column md={4}>
            <div className={s.highlightColumn}>{'md={4}'}</div>
          </Column>
          <Column md={4}>
            <div className={s.highlightColumn}>{'md={4}'}</div>
          </Column>
          <Column md={4}>
            <div className={s.highlightColumn}>{'md={4}'}</div>
          </Column>
        </Row>
        <Row>
          <Column md={6}>
            <div className={s.highlightColumn}>{'md={6}'}</div>
          </Column>
          <Column md={6}>
            <div className={s.highlightColumn}>{'md={6}'}</div>
          </Column>
        </Row>

        <h3 className={s.h3}>Original bootstrap</h3>

        <div className="row">
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
          <div className="col-md-1">
            <div className={s.highlightColumn}>.col-md-1</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className={s.highlightColumn}>.col-md-8</div>
          </div>
          <div className="col-md-4">
            <div className={s.highlightColumn}>.col-md-4</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className={s.highlightColumn}>.col-md-4</div>
          </div>
          <div className="col-md-4">
            <div className={s.highlightColumn}>.col-md-4</div>
          </div>
          <div className="col-md-4">
            <div className={s.highlightColumn}>.col-md-4</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className={s.highlightColumn}>.col-md-6</div>
          </div>
          <div className="col-md-6">
            <div className={s.highlightColumn}>.col-md-6</div>
          </div>
        </div>

        <h2 className={s.h2}>Example: Mobile, tablet, desktop</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column xs={12} sm={6} md={8}>
            <div className={s.highlightColumn}>
              {'xs={12} sm={6} md={8}'}
            </div>
          </Column>
          <Column xs={6} md={4}>
            <div className={s.highlightColumn}>
              {'xs={6} md={4}'}
            </div>
          </Column>
        </Row>
        <Row>
          <Column xs={6} sm={4}>
            <div className={s.highlightColumn}>
              {'xs={6} sm={4}'}
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className={s.highlightColumn}>
              {'xs={6} sm={4}'}
            </div>
          </Column>
          <div clearfix visibleXsBlock />
          <Column xs={6} sm={4}>
            <div className={s.highlightColumn}>
              {'xs={6} sm={4}'}
            </div>
          </Column>
        </Row>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8">
            <div className={s.highlightColumn}>
              .col-xs-12 .col-sm-6 .col-md-8
            </div>
          </div>
          <div className="col-xs-6 col-md-4">
            <div className={s.highlightColumn}>
              .col-xs-6 .col-md-4
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-4">
            <div className={s.highlightColumn}>
              .col-xs-6 .col-sm-4
            </div>
          </div>
          <div className="col-xs-6 col-sm-4">
            <div className={s.highlightColumn}>
              .col-xs-6 .col-sm-4
            </div>
          </div>
          <div className="clearfix visible-xs-block" />
          <div className="col-xs-6 col-sm-4">
            <div className={s.highlightColumn}>
              .col-xs-6 .col-sm-4
            </div>
          </div>
        </div>

        <h2 className={s.h2}>Example: Column wrapping</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column xs={9}>
            <div className={s.highlightColumn}>{'xs={9}'}</div>
          </Column>
          <Column xs={4}>
            <div className={s.highlightColumn}>
              {'xs={4}'}
              <br />
              Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto
              a new line as one contiguous unit.
            </div>
          </Column>
          <Column xs={6}>
            <div className={s.highlightColumn}>
              {'xs={6}'}
              <br />
              Subsequent columns continue along the new line.
            </div>
          </Column>
        </Row>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div className="row">
          <div className="col-xs-9">
            <div className={s.highlightColumn}>.col-xs-9</div>
          </div>
          <div className="col-xs-4">
            <div className={s.highlightColumn}>
              .col-xs-4
              <br />
              Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto
              a new line as one contiguous unit.
            </div>
          </div>
          <div className="col-xs-6">
            <div className={s.highlightColumn}>
              .col-xs-6
              <br />
              Subsequent columns continue along the new line.
            </div>
          </div>
        </div>

        <h2 className={s.h2}>Responsive column resets</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column xs={6} sm={3}>
            <div className={s.highlightColumn}>
              {'xs={6} sm={3}'}
              <p>Resize your viewport or check it out on your phone for an example.</p>
            </div>
          </Column>
          <Column xs={6} sm={3}>
            <div className={s.highlightColumn}>{'xs={6} sm={3}'}</div>
          </Column>

          <div clearfix visibleXsBlock />

          <Column xs={6} sm={3}>
            <div className={s.highlightColumn}>{'xs={6} sm={3}'}</div>
          </Column>
          <Column xs={6} sm={3}>
            <div className={s.highlightColumn}>{'xs={6} sm={3}'}</div>
          </Column>
        </Row>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <div className={s.highlightColumn}>
              .col-xs-6 .col-sm-3
              <p>Resize your viewport or check it out on your phone for an example.</p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className={s.highlightColumn}>.col-xs-6 .col-sm-3</div>
          </div>

          <div className="clearfix visible-xs-block" />

          <div className="col-xs-6 col-sm-3">
            <div className={s.highlightColumn}>.col-xs-6 .col-sm-3</div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className={s.highlightColumn}>.col-xs-6 .col-sm-3</div>
          </div>
        </div>

        <h2 className={s.h2}>Offsetting columns</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column md={4}>
            <div className={s.highlightColumn}>{'md={4}'}</div>
          </Column>
          <Column md={4} mdOffset={4}>
            <div className={s.highlightColumn}>{'md={4} mdOffset={4}'}</div>
          </Column>
        </Row>
        <Row>
          <Column md={3} mdOffset={3}>
            <div className={s.highlightColumn}>{'md={3} mdOffset={3}'}</div>
          </Column>
          <Column md={3} mdOffset={3}>
            <div className={s.highlightColumn}>{'md={3} mdOffset={3}'}</div>
          </Column>
        </Row>
        <Row>
          <Column md={6} mdOffset={3}>
            <div className={s.highlightColumn}>{'md={6} mdOffset={3}'}</div>
          </Column>
        </Row>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div className="row">
          <div className="col-md-4">
            <div className={s.highlightColumn}>.col-md-4</div>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <div className={s.highlightColumn}>.col-md-4 .col-md-offset-4</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-md-offset-3">
            <div className={s.highlightColumn}>.col-md-3 .col-md-offset-3</div>
          </div>
          <div className="col-md-3 col-md-offset-3">
            <div className={s.highlightColumn}>.col-md-3 .col-md-offset-3</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className={s.highlightColumn}>.col-md-6 .col-md-offset-3</div>
          </div>
        </div>

        <h2 className={s.h2}>Nesting columns</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column sm={9}>
            <div className={s.highlightColumn}>Level 1: {'sm={9}'}</div>
            <Row>
              <Column xs={8} sm={6}>
                <div className={s.highlightColumn}>Level 2: {'xs={8} sm={6}'}</div>
              </Column>
              <Column xs={4} sm={6}>
                <div className={s.highlightColumn}>Level 2: {'xs={4} sm={6}'}</div>
              </Column>
            </Row>
          </Column>
        </Row>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div className="row">
          <div className="col-sm-9">
            <div className={s.highlightColumn}>Level 1: .col-sm-9</div>
            <div className="row">
              <div className="col-xs-8 col-sm-6">
                <div className={s.highlightColumn}>Level 2: .col-xs-8 .col-sm-6</div>
              </div>
              <div className="col-xs-4 col-sm-6">
                <div className={s.highlightColumn}>Level 2: .col-xs-4 .col-sm-6</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className={s.h2}>Column ordering</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>

        <Row>
          <Column md={9} mdPush={3}>
            <div className={s.highlightColumn}>{'md={9} mdPush={3}'}</div>
          </Column>
          <Column md={3} mdPull={9}>
            <div className={s.highlightColumn}>{'md={3} mdPull={9}'}</div>
          </Column>
        </Row>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div className="row">
          <div className="col-md-9 col-md-push-3">
            <div className={s.highlightColumn}>.col-md-9 .col-md-push-3</div>
          </div>
          <div className="col-md-3 col-md-pull-9">
            <div className={s.highlightColumn}>.col-md-3 .col-md-pull-9</div>
          </div>
        </div>

      </Container>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(Home, s);
