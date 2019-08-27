import {FizzBuzz} from "../fizzbuzz";

describe("fizz buzz", () => {
    it("should return value of 1", () => {
        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run(1)).toBe("1");
    });

    it("should return value of 1", () => {
        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run(2)).toBe("2");
    });

    it("should return Fizz for 3", () => {
        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run(3)).toBe("Fizz");
    });
});
