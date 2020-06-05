import { getWidthChecker } from './checkers/sizeChecker.js';
import { getValidStart, getValidContinue } from './checkers/validityChecker.js';
import getChars from './getChars.js';

self.addEventListener('message', ({ data }) => {
  const { type } = data as { type?: string };
  if (!type) return;

  const getCharType = type === 'start' ? getValidStart : getValidContinue;
  
  const chars = getChars({
    checkers: [getCharType(), getWidthChecker(.5)],
    range: [0, 0xFFFFF],
  });

  const response = JSON.stringify(chars);
  
  // TS thinks this needs a second param. 
  // Passing a second one will actually break the web worker.

  // @ts-ignore
  self.postMessage(response);
})