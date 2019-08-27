import {FizzBuzz} from "../fizzbuzz";

describe("fizz buzz", () => {
    it("should return number", () => {
        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run(0)).toBe(1);
    });
});
