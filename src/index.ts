import { getWidthChecker } from './checkers/sizeChecker.js';
import { getValidStart, getValidContinue } from './checkers/validityChecker.js';
import getChars from './getChars.js';
import { tick, onMouseUp } from './domHelpters'

const textbox = document.querySelector('textarea');

const toggleButtons = () => {
    document.querySelectorAll('button').forEach(btn => btn.disabled = !btn.disabled);
}

onMouseUp('.id_start-button', async e => {
    toggleButtons();

    textbox.value = 'Loading...';
    await tick();

    const chars = getChars({
        checkers: [getValidStart(), getWidthChecker(.5)],
        range: [0, 0xFFFFF],
    });

    textbox.value = JSON.stringify(chars);
    
    toggleButtons();
});

onMouseUp('.id_continue-button', async e => {
    toggleButtons();

    textbox.value = 'Loading...';
    await tick();

    const chars = getChars({
        checkers: [getValidContinue(), getWidthChecker(.5)],
        range: [0, 0xFFFFF],
    });

    textbox.value = JSON.stringify(chars);
    
    toggleButtons();
})