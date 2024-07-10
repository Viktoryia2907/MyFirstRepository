import superagent from "superagent";

describe("Test for comments", () => {
    const BASE_URL = "https://jsonplaceholder.typicode.com/";
    const postLink = `${BASE_URL}/comments`;
    const postLinkNumber = `${postLink}?postId=1`;


    it("Получение comments для поста", async () => {
        const response = await superagent.get(`${postLinkNumber}`);
        const body = response.body;

        expect(body).not.toBeNull();
        expect(response.status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        body.forEach((item: { postId: number; email: string; body: string; name: string }) => {
            expect(item.postId).toBe(1);
            expect(item.email).not.toBeNull();
            expect(item.body).not.toBeNull();
            expect(item.name).not.toBeNull();
        });
    });
});



