export class FizzBuzz {
    // tslint:disable-next-line:no-empty
    constructor() {
    }
    run(value: number): string {
        if(value === 3)
            return "Fizz";
        return value.toString();
    }
}
