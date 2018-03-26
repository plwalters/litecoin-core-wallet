## Status

Right now this project is a proof of concept to show off how the tech stack can look.  This is not intended to be a final production ready product, just act as a proof of concept and spur discussion.

## Getting started

There are 3 things that need to run -

### Client

The `/client` directory is home to an Aurelia CLI generated webpack / typescript application.

From root directory of project -

```
$ cd client
$ npm install
$ npm start
```

### Proxy Adapter

A proxy adapter for the wallet to use to interact with the running node.

From root directory of project -
```
$ cd proxy-adapter
$ npm install
$ npm start
```

### Litecoin Core Node - TESTNET

To actually have a node to run the wallet against you need to pull down the core `litecoin` project.
This is not included in this repository and instructions for running a node on testnet can be found in that project

[Instructions for running a Litecoin testnet node](https://github.com/litecoin-project/litecoin/blob/master/doc/README.md#building)

**MAKE SURE YOU ARE RUNNING THE NODE AGAINST TESTNET**

To run on testnet only add this to the `litecoin.conf` -

```
testnet=1
```

