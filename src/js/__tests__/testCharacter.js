/* eslint-disable no-undef */
import Character from "../character";


test('Invalid length name', () => {
    expect(() => new Character ('s', 'Bowman')).toThrow('Invalid length name');
});

test('Name is not string', () => {
    expect(() => new Character (1, 'Bowman')).toThrow('Name is not string');
});


test('Invalid type of character', () => {
    expect(() => new Character ('Hero', 'Necromancer')).toThrow('Invalid type of character');
});


