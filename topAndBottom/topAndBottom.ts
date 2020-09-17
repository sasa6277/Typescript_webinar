import { HasEmail } from "../basic type/basic";

//== TOP TYPES ==//

/**
 * (1) "Top types" are types that can hold any value. Typescript has two of them
 */

let myAny: any = 32;
let myUnknown: unknown = "sasa"                              //{foo:"ddd"};

// Note that we can do whatever we want with an any, but nothing with an unknown

myAny.foo.bar.baz;
myUnknown.foo;

/**
 * (2) When to use `any`
 * Anys are good for areas of our programs where we want maximum flexibility
 * Example: sometimes a Promise<any> is fine when we don't care at all about the resolved value
 */
async function logWhenResolved(p: Promise<any>) {
  const val = await p;
  console.log("Resolved to: ", val);
}

/**
 * (3) When to use `unknown`
 * Unknowns are good for "private" values that we don't want to expose through a public API.
 * They can still hold any value, we just must narrow the type before we're able to use it.
 *
 * We'll do htis with a type guard.
 */

myUnknown.split(", "); // 🚨 ERROR

/**
 * (4) Built-in type guards
 */
if (typeof myUnknown === "string") {
  // in here, myUnknown is of type string
  myUnknown.split(", "); // ✅ OK
}



//== BOTTOM TYPE: never ==//

/**
 * (8) Bottom types can hold no values. TypeScript has one of these: `never`
 */
let n: never = 4;

/**
 * A common place where you'll end up with a never
 * is through narrowing exhaustively
 */

let x = "abc" as string | number;

if (typeof x === "string") {
  // x is a string here
  x.split(", ");
} else if (typeof x === "number") {
  // x is a number here
  x.toFixed(2);
} else {
    x
  // x is a never here
}

/**
 * (9) We can use this to our advantage to create exhaustive conditionals and switches
 */


let y = 4 as string | number;

if (typeof y === "string") {
  // y is a string here
  y.split(", ");
} else if (typeof y === "number") {
  // y is a number here
  y.toFixed(2);
} else {
  y
}