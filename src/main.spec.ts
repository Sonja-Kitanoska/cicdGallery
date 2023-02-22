// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';

const add = (a :number, b : number) => a + b;
test('it adds two numbers', () => {
  expect(add(1, 1)).toBe(2);
});
