export class Calculator {

    static add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number, c?: number): number {
        if (b === 0 || c === 0) {
            throw new Error('Cannot divide by zero');
        }
        if (c !== undefined) {
            return a / b / c;
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

