var HelloWorld = artifacts.require("./HelloWorldDapp.sol");

contract('HelloWorld', function (accounts) {

    it("should start from zero", function () {

        var hello;

        return HelloWorld.deployed().then(function (instance) {
            hello = instance;
        })
            .then(function () {
                return hello.balance.call();
            })
            .then(function (balance) {
                assert.equal(balance.toNumber(), 0, " initial balance should be 0");
            });

    });

    it("should increase correctly", function () {

        var hello;
        var initialBalance;

        return HelloWorld.deployed().then(function (instance) {
            hello = instance;
        })
            .then(function () {
                return hello.balance.call();
            })
            .then(function (сounter) {
                initialBalance = сounter.toNumber();
            })
            .then(function () {
                return hello.increase();
            })
            .then(function () {
                return hello.balance.call();
            })
            .then(function (сounter) {
                assert.equal(сounter.toNumber(), initialBalance + 1, " after increasing balance should be 1");
            });

    });

    it("should decrease correctly", function () {

        var hello;
        var initialBalance;

        return HelloWorld.deployed().then(function (instance) {
            hello = instance;
        })
            .then(function () {
                return hello.balance.call();
            })
            .then(function (сounter) {
                initialBalance = сounter.toNumber();
            })
            .then(function () {
                return hello.decrease();
            })
            .then(function () {
                return hello.balance.call();
            })
            .then(function (сounter) {
                assert.equal(сounter.toNumber(), initialBalance - 1, " after increasing balance should be 1");
            });

    });

});
