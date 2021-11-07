const helpers = require("./helpers.js");

describe("My work", () => {
  let multiplyBy3 = helpers.multiplyBy3;
  test("works", () => {
    expect(multiplyBy3(6)).toEqual(18);
  });
});

describe("My second Function", () => {
  let addTogether = helpers.addTogether;
  test("works", () => {
    expect(addTogether(4, 4)).toEqual(8);
  });
});

describe("second function exists", () => {
  let addTogether = helpers.addTogether;
  test("exists", () => {
    expect(addTogether).toBeDefined();
  });
});

describe("third function", () => {
  let greeting = helpers.greeting;
  test("contains specific word", () => {
    expect(greeting("hello")).not.toContain("bye");
  });
});
