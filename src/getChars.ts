const getChars = ({ checkers, range }) =>  {
    const chars = [];

    outer:
    for (let i = range[0]; i < range[1]; i++) {
        // no idea why TS doesn't like this. This is old at this point.
        // @ts-ignore
        const char = String.fromCodePoint(i);

        for (const charChecker of checkers) {
            const state = charChecker(char);

            // delete arr if we're asked
            if (state.killArr) chars.length = 0;

            if (state.success) continue;

            // if unsuccessful, escape the outer loop (don't push char to arr)
            continue outer;
        }

        chars.push(char);
    }

    return chars;
}

export default getChars;