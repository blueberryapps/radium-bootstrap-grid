# Radium Bootstrap Grid [![Dependency Status](https://dependencyci.com/github/blueberryapps/radium-bootstrap-grid/badge)](https://dependencyci.com/github/blueberryapps/radium-bootstrap-grid)

Grid system based on Twitter Bootstrap but with additional 480px breakpoint.

## Install

```sh
$ npm install --save radium-bootstrap-grid
```

## Add it to your project

Look at example directory and you need to add only:

```js
import Component from 'react-pure-render/component';
import Radium from 'radium';
import React from 'react';
import { Column, Container, Row } from 'radium-bootstrap-grid';

@Radium
export default class Page extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Column
            ms={4}
            xsHidden
          >
            Make a column
          </Column>
        </Row>
      </Container>
    );
  }

}
```

## Supported features

### Multiple stacking option
```js
<Column lg={1} md={3} ms={6} sm={4} xs={12}>Adjust to the device</Column>
```

### Hiding columns
```js
<Column lgHidden mdHidden msHidden smHidden xsHidden>Hidden forever</Column>
```

## Example app

```sh
$ npm install
$ cd ./example_app
$ npm install
$ npm start
```
This will start development server at http://localhost:3001/ and you can check the grid.

## License

MIT © [Jiri Orsag](https://github.com/geoRG77)

## Made with love by
[![](https://camo.githubusercontent.com/d88ee6842f3ff2be96d11488aa0d878793aa67cd/68747470733a2f2f7777772e676f6f676c652e636f6d2f612f626c75656265727279617070732e636f6d2f696d616765732f6c6f676f2e676966)](https://www.blueberry.io)
