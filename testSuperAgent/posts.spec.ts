import superagent from "superagent";

describe("Test for posts", () => {
    const BASE_URL = "https://jsonplaceholder.typicode.com/";
    const postLink = `${BASE_URL}/posts`;
    const postLinkNumber = `${postLink}/2`;
    const postLinkComments = `${postLinkNumber}/comments`;


    it("Получение всех постов", async () => {
        const response = await superagent.get(`${postLink}`);
        const body = response.body;

        expect(body).not.toBeNull();
        expect(response.status).toBe(200);
    });

    it("Получение поста по id", async () => {
        const response = await superagent.get(`${postLink}`).query({ id: 20 });
        const body = response.body;
        const post = response.body[0];

        expect(response.status).toBe(200);
        expect(body).toBeInstanceOf(Array); //Проверяем, что тело ответа - массив
        expect(body.length).toBe(1); // Объект с данным id - 1 в БД
        expect(post.id).toBe(20);
        expect(post.userId).toBe(2);
        expect(post.title).not.toBeNull;
        expect(post.body).not.toBeNull;
    });

    it("Добавление нового поста по userId", async () => {
        const response = await superagent.post(`${postLink}`).send({
            userId: 20,
            id: 200,
            title: "Test",
            body: "TestBody",
        });
        const body = response.body;

        expect(response.status).toBe(201);
        expect(body).toBeInstanceOf(Object);
        expect(body.userId).toBe(20);
        expect(body.id).toBe(101); // id присваивается 101 вне зависимости от реквеста
        expect(body.title).toBe("Test");
        expect(body.body).toBe("TestBody");
    });

    it("Удаление поста", async () => {
        const response = await superagent.del(`${postLinkNumber}`);
        const body = response.body;

        expect(body).toBeInstanceOf(Object);
        expect(response.status).toBe(200);
        expect(body).toEqual({});
    });

    it("Редактирование поста через PUT", async () => {
        const response = await superagent.put(`${postLinkNumber}`).send({
            userId: 200,
            id: 2000,
            title: "TestForPut",
            body: "TestBodyForPut",
        });
        const body = response.body;

        expect(body).toBeInstanceOf(Object);
        expect(response.status).toBe(200);
        expect(body.userId).toBe(200);
        expect(body.id).toBe(2);
        expect(body.title).toBe("TestForPut");
        expect(body.body).toBe("TestBodyForPut");
    });

    it("Редактирование поста через PATCH", async () => {
        const response = await superagent.put(`${postLinkNumber}`).send({
            body: "TestBodyForPatch",
        });
        const body = response.body;

        expect(body).toBeInstanceOf(Object);
        expect(response.status).toBe(200);
        expect(body.id).toBe(2);
        expect(body.body).toBe("TestBodyForPatch");
    });

    it("Получение comments для поста", async () => {
        const response = await superagent.get(`${postLinkComments}`);
        const body = response.body;

        expect(body).not.toBeNull();
        expect(response.status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        body.forEach((item: { postId: number; email: string; body: string; name: string }) => {
            expect(item.postId).toBe(2);
            expect(item.email).not.toBeNull();
            expect(item.body).not.toBeNull();
            expect(item.name).not.toBeNull();
        });
    });
});

