import { Person } from "../src/person"

describe("CheckPerson", () => {

    test("Check quantity of symmols full name", () => {
        const result = Person.getFullName("Ivan", "Pupkin");
        const expectedResult = 11;

        expect(result).toHaveLength(expectedResult);
    })


    test("Check correct greetings", () => {
        const result = Person.greet("Petr");
        const expectedResult = "Hello, my name is Petr";

        expect(result).toBe(expectedResult);
    })

    test("Check any word", () => {
        const result = Person.greet("Petr");

        expect(result).toMatch("Hello");
    })

    test("Check adult person", () => {
        const result = Person.isAdult(18);

        expect(result).toBe(true);
    })

})