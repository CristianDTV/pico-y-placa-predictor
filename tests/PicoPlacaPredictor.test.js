const PicoPlacaPredictor = require("../src/PicoPlacaPredictor");

describe("PicoPlacaPredictor", () => {
  test("Restriction during peak day and time (Monday, plate ends in 1)", () => {
    const predictor = new PicoPlacaPredictor("ABC1231", "2024-09-16", "08:00");
    expect(predictor.canBeOnRoad()).toBe(false);
  });

  test("No restriction outside peak hours (Monday, plate ends in 1)", () => {
    const predictor = new PicoPlacaPredictor("ABC1231", "2024-09-16", "10:00");
    expect(predictor.canBeOnRoad()).toBe(true);
  });

  test("No restriction on unrestricted day (Monday, plate ends in 3)", () => {
    const predictor = new PicoPlacaPredictor("ABC1233", "2024-09-16", "08:00");
    expect(predictor.canBeOnRoad()).toBe(true);
  });

  test("Restriction in afternoon hours (Tuesday, plate ends in 4)", () => {
    const predictor = new PicoPlacaPredictor("ABC1234", "2024-09-17", "18:00");
    expect(predictor.canBeOnRoad()).toBe(false);
  });

  test("No restriction on weekend (Saturday)", () => {
    const predictor = new PicoPlacaPredictor("ABC1235", "2024-09-21", "08:00");
    expect(predictor.canBeOnRoad()).toBe(true);
  });

  test("Restriction at the edge of morning hours (Wednesday, plate ends in 5)", () => {
    const predictor = new PicoPlacaPredictor("ABC1235", "2024-09-18", "09:30");
    expect(predictor.canBeOnRoad()).toBe(false);
  });

  test("No restriction right after morning hours (Thursday, plate ends in 7)", () => {
    const predictor = new PicoPlacaPredictor("ABC1237", "2024-09-19", "09:31");
    expect(predictor.canBeOnRoad()).toBe(true);
  });

  test("Restriction at the start of afternoon hours (Friday, plate ends in 0)", () => {
    const predictor = new PicoPlacaPredictor("ABC1230", "2024-09-20", "16:00");
    expect(predictor.canBeOnRoad()).toBe(false);
  });
});
