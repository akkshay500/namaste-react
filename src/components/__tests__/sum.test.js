import sum from "../sum";

test("Sum of 1 and 2 should be 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});