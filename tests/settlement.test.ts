import { describe, expect, it } from "vitest";
import { buildSettlementQuote, netAfterDiscount, parseAndQuoteJson } from "../src/index.js";

function nextPrng(seed: number): number {
  const mixed = Math.imul(seed ^ (seed >>> 15), 0x2c1b3c6d);
  return (mixed ^ (mixed >>> 12)) >>> 0;
}

describe("settlement conservation & closed Zod schema boundary", () => {
  it("conserves grossCents = discountCents + netCents across 256 seeded inputs", () => {
    let state = 0x5eed_cafe;
    for (let step = 0; step < 256; step += 1) {
      state = nextPrng(state + step);
      const grossCents = (state % 50_000_000) + 1;
      state = nextPrng(state);
      const discountBps = state % 10_001;
      const quote = buildSettlementQuote({
        accountId: "acct_ts_01",
        grossCents,
        discountBps,
      });
      expect(quote.netCents).toBeGreaterThanOrEqual(0);
      expect(quote.netCents).toBeLessThanOrEqual(grossCents);
      expect(quote.discountCents + quote.netCents).toBe(grossCents);
      expect(netAfterDiscount(grossCents, quote.discountCents)).toBe(quote.netCents);
    }
  });

  it("accepts canonical wire JSON and rejects unknown keys under .strict()", () => {
    const valid = JSON.stringify({
      accountId: "acct_primary",
      grossCents: 20_000,
      discountBps: 500,
    });
    const quote = parseAndQuoteJson(valid);
    expect(quote.discountCents).toBe(1_000);
    expect(quote.netCents).toBe(19_000);

    const spoofed = JSON.stringify({
      accountId: "acct_primary",
      grossCents: 20_000,
      discountBps: 500,
      role: "superuser",
    });
    expect(() => parseAndQuoteJson(spoofed)).toThrow();
  });
});
