import { Calculator } from "../src/calculator"
import { deepEqual } from "assert"


describe("Addition", () => {

    it("Addition of two numbers", () => {
        const result = Calculator.add(2, 6);
        const expectedResult = 8;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    it("Displaying large numbers", () => {
        const result = Calculator.add(999999999, 1);
        const expectedResult = 1000000000;

        deepEqual(result, expectedResult, "notEqualMessage");
    })

    test("Addition of three numbers", () => {
        const result = Calculator.add(2, 6, 10);
        const expectedResult = 18;

        expect(result).toBe(expectedResult);
    })
})