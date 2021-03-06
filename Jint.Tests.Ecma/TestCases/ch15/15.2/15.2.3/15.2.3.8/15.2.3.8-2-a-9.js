/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.8/15.2.3.8-2-a-9.js
 * @description Object.seal - 'P' is own property of a String object which implements its own [[GetOwnProperty]]
 */


function testcase() {
        var strObj = new String("abc");

        strObj.foo = 10; // default [[Configurable]] attribute value of foo: true
        var preCheck = Object.isExtensible(strObj);
        Object.seal(strObj);

        delete strObj.foo;
        return preCheck && strObj.foo === 10;
    }
runTestCase(testcase);
