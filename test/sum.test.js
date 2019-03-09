import {
  expect,
} from '@open-wc/testing';

import { sum } from '../src/LitElementTesting/sum.js';

describe('sum', () => {
  it('should retunr 5 when adding 2 and 3', () => {
    expect(sum(2,3)).to.be.equal(5);
  });
});
