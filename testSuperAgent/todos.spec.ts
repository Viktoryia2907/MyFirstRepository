import superagent from "superagent";

describe("Test for todos", () => {
    const BASE_URL = "https://jsonplaceholder.typicode.com/";
    const todosLink = `${BASE_URL}/todos`;

    it("Получение всех значений по id", async () => {
        const response = await superagent.get(`${todosLink}`).query({ userId: 10 });
        const body = response.body;

        expect(body).not.toBeNull();
        expect(body).toBeInstanceOf(Array);
        expect(response.status).toBe(200);
        expect(body.length).toBe(20);
    });

    it("Получение значений по несуществующему id", async () => {
        const response = await superagent.get(`${todosLink}`).query({ userId: 10000 });
        const body = response.body;

        expect(body).toBeInstanceOf(Array);
        expect(response.status).toBe(200);
        expect(body).toEqual([]);
    });
});
