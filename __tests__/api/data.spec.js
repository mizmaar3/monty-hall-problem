import data from "api/data";

describe("data", () => {
  it("should return array with items of provided length", async () => {
    const result = await data(5);
    expect(result.length).toBe(5);
  });

  it("each item shud have length of 3", async () => {
    const result = await data(5);
    result.forEach(item => {
      expect(item.length).toBe(3);
    });
  });

  it("each item shud single 1 and double 0", async () => {
    const result = await data(5);
    result.forEach(item => {
      expect(item.filter(a => a == 1).length).toBe(1);
      expect(item.filter(a => a == 0).length).toBe(2);
    });
  });
});
