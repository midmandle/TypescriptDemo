export class FizzBuzz {
    // tslint:disable-next-line:no-empty
    constructor() {
    }
    isFizzBuzz(value: number): string {
        if(this.isDivisibleBy5(value) && this.isDivisibleBy3(value))
            return "FizzBuzz";
        if(this.isDivisibleBy5(value))
            return "Buzz";
        if(this.isDivisibleBy3(value))
            return "Fizz";
        return value.toString();
    }

    private isDivisibleBy5(value: number) {
        return value % 5 === 0;
    }

    private isDivisibleBy3(value: number) {
        return value % 3 === 0;
    }
}
