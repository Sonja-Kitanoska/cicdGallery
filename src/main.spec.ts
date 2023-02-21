// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';
import { add } from './main';

test('it adds two numbers', () => {
  expect(add(1, 1)).toBe(2);
});
