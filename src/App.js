import React, {Component} from 'react'
import Clock from './Clock'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import HelloWorldDappContract from '../build/contracts/HelloWorldDapp.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storageValue: 0,
            balance: 0
        }

        this.activateLasers = this.activateLasers.bind(this);
    }

    componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.

        getWeb3
            .then(results => {
                this.web3 = results.web3

                // Instantiate contract once web3 provided.
                this.instantiateContract()
            })
            .catch(() => {
                console.log('Error finding web3.')
            })
    }

    activateLasers(e) {

        console.log('1. The link was clicked.');

        this.helloWorldDappInstance.increase(1, {from: this.accounts[0]
        }).then(() => {
            return this.helloWorldDappInstance.balance()
        }).then((balance) => {
            return this.setState({balance: balance.c[0]})
        })

        console.log('2. The link was clicked. storageValue: ' + this.state.storageValue);
    }

    instantiateContract() {

        /*
         * SMART CONTRACT EXAMPLE
         *
         * Normally these functions would be called in the context of a
         * state management library, but for convenience I've placed them here.
         */

        const contract = require('truffle-contract')
        this.simpleStorage = contract(SimpleStorageContract)
        this.simpleStorage.setProvider(this.web3.currentProvider)

        this.helloWorldDapp = contract(HelloWorldDappContract)
        this.helloWorldDapp.setProvider(this.web3.currentProvider)

        // Get accounts.
        this.web3.eth.getAccounts((error, accounts) => {

            this.accounts = accounts

            this.simpleStorage.deployed().then((instance) => {
                this.simpleStorageInstance = instance

                // Stores a given value, 5 by default.
                return this.simpleStorageInstance.set(5, {from: this.accounts[0]})
            }).then((result) => {
                // Get the value from the contract to prove it worked.
                return this.simpleStorageInstance.get.call(this.accounts[0])
            }).then((result) => {
                // Update state with the result.
                return this.setState({storageValue: result.c[0]})
            })

            this.helloWorldDapp.deployed().then((instance) => {
                this.helloWorldDappInstance = instance
                return this.helloWorldDappInstance.increase(1, {from: this.accounts[0]})
            })
                .then(() => {
                return this.helloWorldDappInstance.balance()
            })
                .then((balance) => {
                return this.setState({balance: balance.c[0]})
            })

        })
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar pure-menu pure-menu-horizontal">
                    <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
                </nav>

                <main className="container">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <h1>Good to Go!</h1>
                            <p>Your Truffle Box is installed and ready.</p>
                            <h2>Smart Contract Example</h2>
                            <p>If your contracts compiled and migrated successfully, below will show a stored value of 5
                                (by default).</p>
                            <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
                            <p>The stored value is: {this.state.storageValue}</p>
                            <p>The Balance is: {this.state.balance}</p>

                            <button onClick={this.activateLasers}>
                            Activate Lasers
                            </button>
                            <Clock />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App
