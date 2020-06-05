import { onMouseUp } from './domHelpers'

const textbox = document.querySelector('textarea');
const btns = document.querySelectorAll('button');

const setBtns = (disabled: boolean) => {
    for (const btn of Array.from(btns)) {
        btn.disabled = disabled
    }
}

const getChars = (type: string) => {
    setBtns(true);
    textbox.value = 'Loading...';
    worker.postMessage({ type });
}

const worker = new Worker('./worker.js');

worker.addEventListener('message', ({ data }) => {
    textbox.value = data;
    setBtns(false);
});

onMouseUp('.id_start-button', () => getChars('start'));
onMouseUp('.id_continue-button', () => getChars('continue'));