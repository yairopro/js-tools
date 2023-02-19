"use strict";
const { findResult } = require('./index');
const { includes } = require('ramda');
const onlyIf = require('../onlyIf');
test('findResult( params, fns )', () => {
    const detectBot = findResult([
        onlyIf(includes('google'), 'google'),
        onlyIf(includes('facebook'), 'facebook'),
        onlyIf(includes('twitter'), 'twitter'),
    ]);
    expect(detectBot('googlebot')).toBe('google');
    expect(detectBot('twitterbot')).toBe('twitter');
    expect(detectBot('facebookbot')).toBe('facebook');
    expect(detectBot('telegrambot')).toBe(undefined);
});
