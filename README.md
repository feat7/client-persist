# client-persist
This is fork of [localForage](https://github.com/localForage/localForage) with support of ```sessionStorage```

Offline storage for your web client. Supports IndexedDB, WebSQL, localStorage and sessionStorage with an easy to crawl with API.
# Installation
```
yarn install client-persist
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
# Documentation
[Documentation of localForage](https://localforage.github.io/localForage)

```client-persist``` provides additonal driver for ```sessionStorage``` on localForage.

sessionStorage driver can be selected by ```setDrvier``` method.

```clientPersist.SESSIONSTORAGE``` is driver for sessionStorage compatibility.
# License
The Apache 2.0 License.

# More
See [localForage](https://github.com/localForage/localForage) for more details.