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
        <h2 className={s.title}>radium-bootstrap-grid</h2>
        <p>Note: Original bootstrap doesn't support 480px breakpoint.</p>
        <Container>
          <Row>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
            <Column
              large={1}
              medium={2}
              phone={6}
              small={3}
              tablet={4}
            >
              <div className={s.highlightColumn} />
            </Column>
          </Row>
        </Container>

        <h2 className={s.title}>Original bootstrap</h2>

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
