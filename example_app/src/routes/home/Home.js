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
      <div className={s.container}>
        <h2 className={s.h2}>Fixed-width grid layout</h2>
        <h3 className={s.h3}>radium-bootstrap-grid</h3>
        <p>Note: Original bootstrap doesn't support 480px breakpoint.</p>
        <Container className="highlightContainer">
          <Row>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn}>hidden</div>
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              lg={1}
              md={2}
              xs={6}
              sm={3}
              ms={4}
            >
              <div className={s.highlightColumn} />
            </Column>
          </Row>
        </Container>

        <h3 className={s.h3}>Original bootstrap</h3>

        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
            <div className="col-xs-6 col-ms-4 col-sm-3 col-md-2 col-lg-1">
              <div className={s.highlightColumn} />
            </div>
          </div>
        </div>

        <h2 className={s.h2}>Offsetting columns</h2>

        <h3 className={s.h3}>radium-bootstrap-grid</h3>
        <p>TBD</p>

        <h3 className={s.h3}>Original Bootstrap</h3>

        <div clasName="container">
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
        </div>

      </div>
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
