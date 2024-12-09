import { expect, it, describe, beforeAll } from "vitest";
import usePresaleVerification from "~/server/composables/usePresaleVerification";

describe("usePresaleVerification", () => {
  const presale = {
    name: "Test",
    email: "test@test.de",
    regularCards: 1,
    discountCards: 1,
    performance: {
      collectionId: "1",
      collectionName: "Test",
      created: "2021-08-30T14:00:00.000Z",
      date: "2021-08-30T14:00:00.000Z",
      updated: "2021-08-30T14:00:00.000Z",
      id: "1",
      specialPerformance: false,
    },
  };

  it("should generate a verification code", () => {
    const { generateVerificationCode, decodeVerificationCode } =
      usePresaleVerification();
    const code = generateVerificationCode(presale);
    expect(code).toBeDefined();

    const decoded = decodeVerificationCode(code);
    expect(decoded).toBeDefined();
    expect(decoded.name).toEqual(presale.name);
    expect(decoded.email).toEqual(presale.email);
    expect(decoded.regularCards).toEqual(presale.regularCards);
    expect(decoded.discountCards).toEqual(presale.discountCards);
    expect(decoded.performance).toEqual(presale.performance);
  });
});
