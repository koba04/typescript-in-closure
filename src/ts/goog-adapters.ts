// This emits `goog.require('goog:app.lib')`
// Should this emit `goog.require('app.lib')` instead?
import appLib from 'goog:app.lib';

const { sum } = appLib;
export const lib = { sum };
