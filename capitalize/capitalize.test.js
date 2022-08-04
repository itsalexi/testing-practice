const capitalize = require('./capitalize.js');

test('works with 1 word', () => {
    expect(capitalize('pog')).toMatch('Pog');
});

test('works with 2 words', () => {
    expect(capitalize('pog pog')).toMatch('Pog pog');
});

test('throw undefined if not a string', () => {
    expect(capitalize(51)).toBeUndefined();
});

test('throw undefined if empty', () => {
    expect(capitalize()).toBeUndefined();
});

test('throw undefined if first letter isnt a letter', () => {
    expect(capitalize('1Poop')).toBeUndefined();
});
