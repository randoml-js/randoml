import RandoML from '../src/randoml';

describe('init with default values', () => {
  const rand = new RandoML();

  test('should return output in range', () => {
    expect(rand.choose()).toBeGreaterThanOrEqual(1);
    expect(rand.choose()).toBeLessThanOrEqual(15);
  });
});

describe('init with correct values', () => {
  const rand = new RandoML({
    settings: {
      min: 20,
      max: 30,
      exclude: [24, 27]
    }
  });

  test('should return output in range', () => {
    for (let i = 0; i < 10; i++) {
      expect(rand.choose()).toBeGreaterThanOrEqual(20);
      expect(rand.choose()).toBeLessThanOrEqual(30);
    }
  });
});

describe('init with empty range', () => {
  const rand = new RandoML({
    settings: {
      min: 1,
      max: 2,
      exclude: [1, 2]
    }
  });

  test('should return error', () => {
    expect(rand.choose()).toBe(undefined);
  });
});
