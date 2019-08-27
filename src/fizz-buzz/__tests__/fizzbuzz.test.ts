import {FizzBuzz} from "../fizzbuzz";

describe("fizz buzz", () => {
    it.each`
    input | output
    ${1} | ${"1"}
    ${2} | ${"2"}
    ${3} | ${"Fizz"}
    ${6} | ${"Fizz"}
    ${5} | ${"Buzz"}
    `("should return $output given $input", ({input, output}) => {
        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.run(input)).toBe(output);
    });
});
