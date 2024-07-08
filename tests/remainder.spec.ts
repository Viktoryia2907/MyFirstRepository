import { Calculator } from "../src/calculator"
import { deepEqual } from "assert"


describe("Remainder", () => {

    it("Remainder of two numbers", () => {
        const result = Calculator.remainder(6, 4);
        const expectedResult = 2;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    test("Remainder with negative number", () => {
        const result = Calculator.remainder(8, -5);
        const expectedResult = 3;

        expect(result).toEqual(expectedResult);
    })

    test("Remainder by zero", () => {
        expect(() => {
            Calculator.remainder(2, 0);
        }).toThrow(new Error('Cannot perform remainder division by zero'));
    });
})