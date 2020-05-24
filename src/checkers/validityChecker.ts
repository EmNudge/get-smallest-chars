import { getNegative, getPositive } from './getState.js';

export const getValidStart = (shouldKill = false) => (char: string) => {
    const res = /\p{ID_Start}/u.test(char);
    if (!res) return getNegative(shouldKill);
    return getPositive();
}

export const getValidContinue = (shouldKill = false) => (char: string) => {
    const res = /\p{ID_Continue}/u.test(char);
    if (!res) return getNegative(shouldKill);
    return getPositive();
}