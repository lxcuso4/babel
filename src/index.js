/**
 * Created by L on 2016/10/7.
 */

import "babel-polyfill";

let foo = 12;
let bar = `hello${foo}`;
function addAll() {
    return Array.from(arguments).reduce((a, b) => a + b);
}