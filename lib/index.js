"use strict";

require("babel-polyfill");

var foo = 12; /**
               * Created by L on 2016/10/7.
               */

var bar = "hello" + foo;
function addAll() {
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}