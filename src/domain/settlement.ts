import { z } from "zod";

export const SettlementRequestSchema = z
  .object({
    accountId: z.string().min(3).max(64),
    grossCents: z.number().int().min(1).max(1_000_000_000),
    discountBps: z.number().int().min(0).max(10_000),
  })
  .strict();

export type SettlementRequest = z.infer<typeof SettlementRequestSchema>;

export const SettlementQuoteSchema = z
  .object({
    accountId: z.string().min(3).max(64),
    grossCents: z.number().int().min(1).max(1_000_000_000),
    discountCents: z.number().int().min(0).max(1_000_000_000),
    netCents: z.number().int().min(0).max(1_000_000_000),
  })
  .strict();

export type SettlementQuote = z.infer<typeof SettlementQuoteSchema>;

/**
 * @requires grossCents >= 1 and grossCents <= 1000000000 and discountCents >= 0 and discountCents <= grossCents
 * @ensures result >= 0 and result <= grossCents
 */
export function netAfterDiscount(grossCents: number, discountCents: number): number {
  if (
    grossCents < 1 ||
    grossCents > 1_000_000_000 ||
    discountCents < 0 ||
    discountCents > grossCents
  ) {
    throw new RangeError("Settlement bounds violated on grossCents or discountCents.");
  }
  return grossCents - discountCents;
}

export function buildSettlementQuote(request: SettlementRequest): SettlementQuote {
  const checked = SettlementRequestSchema.parse(request);
  const discountCents = Math.trunc((checked.grossCents * checked.discountBps) / 10_000);
  const netCents = netAfterDiscount(checked.grossCents, discountCents);
  return SettlementQuoteSchema.parse({
    accountId: checked.accountId,
    grossCents: checked.grossCents,
    discountCents,
    netCents,
  });
}
