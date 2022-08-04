const reverseString = require('./reverseString.js');

test('reverses a string properly', () => {
    expect(reverseString('foo')).toBe('oof');
});

test('reverses two words properly', () => {
    expect(reverseString('foo bar')).toBe('rab oof');
});

test('another test case', () => {
    expect(reverseString('racecar')).toBe('racecar');
});
