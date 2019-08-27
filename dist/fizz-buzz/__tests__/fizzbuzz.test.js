"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("../fizzbuzz");
describe("fizz buzz", () => {
    it("should return value of 1", () => {
        const fizzbuzz = new fizzbuzz_1.FizzBuzz();
        expect(fizzbuzz.run(1)).toBe(1);
    });
});
//# sourceMappingURL=fizzbuzz.test.js.map