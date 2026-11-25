import {
  type SettlementQuote,
  type SettlementRequest,
  SettlementRequestSchema,
  buildSettlementQuote,
} from "../domain/index.js";

export function parseAndQuoteJson(rawJson: string): SettlementQuote {
  if (rawJson.trim().length < 2 || rawJson.length > 8_192) {
    throw new RangeError("Settlement JSON payload length outside permitted wire bounds.");
  }
  let request: SettlementRequest;
  try {
    request = SettlementRequestSchema.parse(JSON.parse(rawJson));
  } catch (err) {
    throw new Error("Invalid settlement JSON payload.", { cause: err });
  }
  return buildSettlementQuote(request);
}
