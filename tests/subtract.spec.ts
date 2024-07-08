import { Calculator } from "../src/calculator"
import { deepEqual } from "assert"


describe("Subtraction", () => {

    it("Subtraction of two numbers", () => {
        const result = Calculator.subtract(10, 6);
        const expectedResult = 4;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    it("Calculation negative number", () => {
        const result = Calculator.subtract(6, 10);
        const expectedResult = -4;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    it("Subtraction with decimal number", () => {
        const result = Calculator.subtract(6, 5.48);
        const expectedResult = 0.52;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    test("Subtraction with decimal number", () => {
        const result = Calculator.subtract(6, 5.48);
        const expectedResult = 0.52;

        expect(result).toBeCloseTo(0.5, 0.6);
    })

})