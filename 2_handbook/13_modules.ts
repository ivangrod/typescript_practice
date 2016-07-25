/*
Modules are executed within their own scope, not in the global scope; this means
that variables, functions, classes, etc. declared in a module are not visible
outside the module unless they are explicitly exported using one of the export
forms. Conversely, to consume a variable, function, class, interface, etc.
exported from a different module, it has to be imported using one of the import
forms.

Modules are declarative.

Modules import one another using a module loader. At runtime the module loader is
responsible for locating and executing all dependencies of a module before
executing it. Modules Loaders: CommonJS - NodeJS / require.js - Webapp's.

In TypeScript, just as in ECMAScript 2015, any file containing a top-level
import or export is considered a module.
*/

/*
1- Export
*/

// Exporting a declaration
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

// Export statements
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };

// Re-exports

export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'

/*
2- Import
*/

// Import a single export from a module
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidatorRneamed = new ZCV();

// Import the entire module into a single variable, and use it to access the module exports
import * as validator from "./ZipCodeValidator";
let myValidatorVariable = new validator.ZipCodeValidator();

// Import a module for side-effects only. Though not recommended practice, some
// modules set up some global state that can be used by other modules.
import "./my-module.js";

/*
3- Default exports. Each module can optionally export a default export. Default exports are marked
with the keyword default; and there can only be one default export per module.
default exports are imported using a different import form.
*/
declare let $: JQuery;
export default $;

import $ from "JQuery";
$("button.continue").html("Next Step...");

/*
4- Guidance for structuring modules
*/

// Export as close to top-level as possible. Consumers of your module should have
// as little friction as possible when using things that you export. Adding too
// many levels of nesting tends to be cumbersome, so think carefully about how
// you want to structure things.

// If you’re only exporting a single class or function, use export default

// If you’re exporting multiple objects, put them all at top-level

// Explicitlly list imported names

// Use the namespace import pattern if you’re importing a large number of things

//MyLargeModule.ts
export class Dog { }
export class Cat { }
export class Tree { }
export class Flower { }

//Consumer.ts
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog

// Do not use namespaces in modules
