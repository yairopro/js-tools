import { assert } from "chai";
import { test } from "mocha";
import floor from ".";

test("floor(decimals, input)", () => {
	const input = 10.9999;

	assert(floor(0, input) === 10, "Doesn't floor to 0 decimals");
	assert(floor(1, input) === 10.9, "Doesn't floor to 1 decimals");
	assert(floor(2, input) === 10.99, "Doesn't floor to 2 decimals");

	// curry
	assert(floor(0)(input) === 10, "Isn't curried");
});