const { getGifs } = require("../../../helpers/getGifs");

describe("Testing getgift fetch", () => {
  test("Shoudl bring 2 items", async () => {
    const gifs = await getGifs("one punch man");
    expect(gifs).toHaveLength(2);
  });

  test("Shoudl bring 2 items", async () => {
    const gifs = await getGifs('');
    expect(gifs).toHaveLength(0);
  });
});
