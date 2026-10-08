import test from "node:test";
import assert from "node:assert/strict";
import { add, subtract, formatCount } from "./app.js";

test("adds two numbers correctly", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test("subtracts two numbers correctly", () => {
  assert.equal(subtract(5, 2), 3);
  assert.equal(subtract(0, 4), -4);
});

test("formats count string properly", () => {
  assert.equal(formatCount(10), "Count: 10");
});
