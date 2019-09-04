import RandoML from '../src/randoml';

describe('init with default values', () => {
  const rand = new RandoML();

  expect(rand.choose()).toBeGreaterThanOrEqual(1);
  expect(rand.choose()).toBeLessThanOrEqual(15);
});
