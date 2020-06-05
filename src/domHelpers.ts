export const tick = (ms = 0) => new Promise((res) => setTimeout(res, ms));

export const onEvent = (type: string) => (query: string, listener: (..._: any[]) => any) => {
    const el = document.querySelector(query);
    el.addEventListener(type, e => listener(e));
};

export const onClick = onEvent('click');
export const onMouseUp = onEvent('mouseup');