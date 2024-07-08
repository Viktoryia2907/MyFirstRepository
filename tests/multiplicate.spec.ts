import { Calculator } from "../src/calculator"
import { deepEqual } from "assert"


describe("Multiplication", () => {

    it("Multiplication of two numbers", () => {
        const result = Calculator.multiply(5, 6);
        const expectedResult = 30;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    it("Multiplication wit zero", () => {
        const result = Calculator.multiply(6, 0);
        const expectedResult = 0;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    test("Subtraction with negative number", () => {
        const result = Calculator.multiply(6, -1);
        const expectedResult = -6;

        expect(result).toEqual(expectedResult);
    })
})