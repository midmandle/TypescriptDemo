export class FizzBuzz {
    // tslint:disable-next-line:no-empty
    constructor() {
    }
    run(value: number): string {
        if(value % 5 === 0)
            return "Buzz";
        if(value % 3 === 0)
            return "Fizz";
        return value.toString();
    }
}
