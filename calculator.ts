export class Calculator {

    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    static remainder(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Cannot perform remainder division by zero');
        }
        return a % b;
    }
}