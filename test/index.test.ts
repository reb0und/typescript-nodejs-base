import { rand } from '../src/index';

describe('random integer test', () => {
  it('returns random ', () => {
    expect(typeof rand()).toBe('number');
  });
});
