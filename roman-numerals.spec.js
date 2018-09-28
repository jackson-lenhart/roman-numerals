import assert from 'assert';

import { encode } from './roman-numerals';

describe('encode', function() {
  it('throws error when given zero', function() {
    assert.throws(function() { encode(0) }, Error, 'Invalid argument');
  });
});
