import { assert } from "chai";
import { test } from "mocha";
import near from ".";

test("near(target, threshold, input)", () => {
	assert(near(0, 1, .5), "Doesn't respect: positive near to 0");
	assert(near(0, 1, -.5), "Doesn't respect: negative near to 0");
	assert(near(0, 1, 1), "Doesn't respect: positive at limit near to 0");
	assert(near(0, 1, -1), "Doesn't respect: negative at limit near to 0");
	assert(!near(0, 1, 2), "Doesn't respect: positive away from 0");
	assert(!near(0, 1, -2), "Doesn't respect: negative away from 0");

	
	assert(near(5, 1, 5.5), "Doesn't respect: positive near to 5");
	assert(near(5, 1, 4.5), "Doesn't respect: negative near to 5");
	assert(near(5, 1, 6), "Doesn't respect: positive at limit near to 5");
	assert(near(5, 1, 4), "Doesn't respect: negative at limit near to 5");
	assert(!near(5, 1, 7), "Doesn't respect: positive away from 5");
	assert(!near(5, 1, 3), "Doesn't respect: negative away from 5");

	assert(near(0)(1)(.5), "Isn't curried");
});