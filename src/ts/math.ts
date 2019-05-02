import { max as max1 } from './max';
import {lib} from './goog-adapters';

export const sum = (a: number, b: number): number => a + b;
export const googSum = lib.sum;
export const max: typeof max1 = max1;
