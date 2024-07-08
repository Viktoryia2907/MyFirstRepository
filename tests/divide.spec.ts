import { Calculator } from "../src/calculator"
import { deepEqual } from "assert"

describe("Dividing", () => {

    it("Division of two numbers", () => {
        const result = Calculator.divide(6, 6);
        const expectedResult = 1;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    it("Division of three numbers", () => {
        const result = Calculator.divide(10, 5, 1);
        const expectedResult = 2;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    test("Division by zero", () => {
        expect(() => {
            Calculator.divide(2, 1, 0);
        }).toThrow(new Error('Cannot divide by zero'));
    });

    test("Division by negative number", () => {
        const result = Calculator.divide(2, 1, -1);
        const expectedResult = -2;
        deepEqual(result, expectedResult, "notEqualMessage");
    });


})

