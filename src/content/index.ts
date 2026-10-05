import { en } from "./en";
import type { Locale } from "./locale";
import { th } from "./th";
import type { Content } from "./types";

export const content: Record<Locale, Content> = { th, en };

export type { Content };
