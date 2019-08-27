import {FizzBuzz} from "../fizzbuzz";

describe("fizz buzz", () => {
    it.each`
    input | output
    ${1} | ${"1"}
    ${2} | ${"2"}
    ${3} | ${"Fizz"}
    ${6} | ${"Fizz"}
    ${5} | ${"Buzz"}
    ${10} | ${"Buzz"}
    ${15} | ${"FizzBuzz"}
    ${30} | ${"FizzBuzz"}
    `("should return $output given $input", ({input, output}) => {
        const fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isFizzBuzz(input)).toBe(output);
    });
});
