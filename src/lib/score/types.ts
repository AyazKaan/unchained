import { SignatureInput } from "../types.js";

export type ScoreSignatureInput = SignatureInput<ScoreMetric, ScoreValues>;

export interface ScoreMetric {
  sprint: number;
}

export interface ScoreValue {
  score: number;
  peer: Uint8Array;
}

export type ScoreValues = ScoreValue[];
