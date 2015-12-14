# Radium Bootstrap Grid

## Install

```sh
$ npm install --save radium-bootstrap-grid
```

## Add it to your project

look at example directory
and you need to add only:

```js
import Component from 'react-pure-render/component';
import React from 'react';
import {Column, Container, Row} from 'radium-bootstrap-grid';

@Radium
export default class Page extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Column
            large={1}
            medium={2}
            phone={6}
            small={3}
            tablet={4}
          >
            Text
          </Column>
        </Row>
      </Container>
    );
  }

}
```

## Example app

```
npm install
cd ./example_app
npm install
gulp
```
this will start development server at localhost:8000 and you can check the grid

## License

MIT © [Jiri Orsag](https://github.com/geoRG77)
