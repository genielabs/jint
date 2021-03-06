/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-23.js
 * @description Object.create - own enumerable data property that overrides an enumerable inherited accessor property in 'Properties' is defined in 'obj' (15.2.3.7 step 5.a)
 */


function testcase() {

        var proto = {};
        Object.defineProperty(proto, "prop", {
            get: function () {
                return { value: 9 };
            },
            enumerable: true
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        Object.defineProperty(child, "prop", {
            value: {
                value: 12
            },
            enumerable: true
        });
        var newObj = Object.create({}, child);

        return newObj.hasOwnProperty("prop") && newObj.prop === 12;
    }
runTestCase(testcase);
