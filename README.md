# client-persist
This is fork of [localForage](https://github.com/localForage/localForage) with support of ```sessionStorage```

Offline storage for your web client. Supports IndexedDB, WebSQL, localStorage and sessionStorage with an easy to crawl with API.
# Installation
```
yarn add client-persist
```
or, if you use npm
```
npm install client-persist
```
# Usage
```
import clientPersist from 'client-persist';

// to use sessionStorage
clientPersist.setDriver(clientPersist.SESSIONSTORAGE)
```
# A minimal example with React
```
import React from "react";
import clientPersist from "client-persist";

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Client Persist"
    };
    clientPersist.getItem("value").then(value => {
      if (value !== null) this.setState({ value });
    });
  }
  storeValue(event) {
    clientPersist.setItem("value", event.target.value)
    .then(() => console.log('--saved--'));
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.value}!<h1>
        <h2>Edit and reload the browser!</h2>
        <input
          type="text"
          onChange={event => this.storeValue(event)}
          value={this.state.value}
        />
      </div>
    );
  }
}
```
[![Edit k983rnkl3v](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k983rnkl3v)

# Documentation
[Documentation of localForage](https://localforage.github.io/localForage)

```client-persist``` provides additonal driver for ```sessionStorage``` on localForage.

sessionStorage driver can be selected by ```setDrvier``` method.

```clientPersist.SESSIONSTORAGE``` is driver for sessionStorage compatibility.
### Store and Retrive data
```
import clientPersist from 'client-persist';

//Set sessionStorage driver
clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

// Driver options
// clientPersist.LOCALSTORAGE, clientPersist.WEBSQL,
// clientPersist.INDEXEDDB, clientPersist.SESSIONSTORAGE

clientPersist.setItem('keyName', 'This is some data')
.then(() => console.log('Data saved');

clientPersist.getItem('keyName')
.then(value => console.log(value));
```
# License
See LICENSE file.

# More
See [localForage](https://github.com/localForage/localForage) for more details.
