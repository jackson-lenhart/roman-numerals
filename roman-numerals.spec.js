import assert from 'assert';

import { encode } from './roman-numerals';

describe('encode', function() {
  it('throws error when given zero', function() {
    assert.throws(() => encode(0), Error, 'Invalid argument');
  });

  it('throws error when given negative', function() {
    assert.throws(() => encode(-5), Error, 'Invalid argument');
  });

  it('gives correct output given input of 1', function() {
    assert.strictEqual(encode(1), 'I');
  });

  xit('gives correct output given input of 3', function() {
    assert.strictEqual(encode(4), 'III');
  });

  xit('gives correct output given input of 4', function() {
    assert.strictEqual(encode(4), 'IV');
  });

  xit('gives correct output given input of 10', function() {
    assert.strictEqual(encode(10), 'X');
  });

  xit('gives correct output given input of 33', function() {
    assert.strictEqual(encode(33), 'XXXIII');
  });

  xit('gives correct output given input of 37', function() {
    assert.strictEqual(encode(37), 'XXXVII');
  });

  xit('gives correct output given input of 59', function() {
    assert.strictEqual(encode(59), 'LIX');
  });

  xit('gives correct output given input of 276', function() {
    assert.strictEqual(encode(276), 'CCLXXVI');
  });

  xit('gives correct output given input of 1993', function() {
    assert.strictEqual(encode(1993), 'MCMXCIII');
  });
});
