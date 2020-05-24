import { getNegative, getPositive, checkerResult } from './getState.js';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d");

const getStrSize = (str: string) => {
    const textMetric = ctx.measureText(str);
    const width = textMetric.actualBoundingBoxRight - textMetric.actualBoundingBoxLeft;
    const height = textMetric.actualBoundingBoxAscent - textMetric.actualBoundingBoxDescent;

    return { 
        width: Math.abs(width), 
        height: Math.abs(height) 
    };
}

export const getMinWidthChecker = (shouldKill = false) => {
    let min = Infinity;

    return (char: string): checkerResult => {
        // it will still get size if val is 0, but whatever
        const width = getStrSize(char).width;
        if (width > min) return getNegative();
        min = width;
        return getPositive(shouldKill);
    }
}

export const getWidthChecker = (maxWidth: number = 1) => {
    return (char: string): checkerResult => {
        // it will still get size if val is 0, but whatever
        const width = getStrSize(char).width;
        if (width > maxWidth) return getNegative();
        return getPositive();
    }
}