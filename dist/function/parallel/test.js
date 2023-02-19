"use strict";
const parallel = require("./index");
test('parallel(...fns)', () => {
    let result = parallel(i => i)(1);
    expect(result).toBe(1);
    result = parallel(i => i + 1, i => i + 2)(1);
    expect(result).toBe(3);
    result = parallel(i => i + 1, null)(1);
    expect(result).toBe(null);
    // The next text should handle the error by logging the message in the error channel
    // So it replace the console.error to capture the log
    let errorHandled = false;
    const errorChannel = console.error;
    console.error = (text, ...p) => {
        console.error = errorChannel;
        if (typeof text === 'string' && text.startsWith('Error in parallel'))
            errorHandled = true;
        else
            console.error(text, ...p);
    };
    // add test..
    result = parallel(i => i + 4, () => (null)(), // will crash but next below will still run
    // will crash but next below will still run
    i => i + 1)(1);
    expect(result).toBe(2);
    expect(errorHandled).toBe(true);
});
