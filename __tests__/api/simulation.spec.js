import simulation from "api/simulation";

describe("simulation", () => {
  it("should throw error if size is < 1", async () => {
    const result = await simulation(0, 1, true).catch(e => e);
    expect(result.message).toBe("Size must be 1 or heigher");
  });

  it("return obj shud have cars, goats, size, changeSelection properties", async () => {
    const result = await simulation(4, 1, true);
    expect(result).toHaveProperty("cars");
    expect(result).toHaveProperty("goats");
    expect(result).toHaveProperty("size");
    expect(result).toHaveProperty("changeSelection");
  });

  it("cars + goats sum shud be equal to size provided", async () => {
    const result = await simulation(8, 0, true);
    expect(result.cars + result.goats).toBe(8);
  });
});
