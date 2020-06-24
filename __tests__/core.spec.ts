import RandoML from '../src';

describe('core functions', () => {
  it('should return output in range for default options', () => {
    const rand = new RandoML();

    for (let i = 0; i < 10; i++) {
      expect(rand.choose()).toBeGreaterThanOrEqual(1);
      expect(rand.choose()).toBeLessThanOrEqual(15);
    }
  });

  it('should return output in range for custom options', () => {
    const rand = new RandoML({
      settings: {
        min: 20,
        max: 30,
        exclude: [24, 27],
      },
    });

    for (let i = 0; i < 10; i++) {
      expect(rand.choose()).toBeGreaterThanOrEqual(20);
      expect(rand.choose()).toBeLessThanOrEqual(30);
    }
  });

  it('should return an error for empty range', () => {
    const rand = new RandoML({
      settings: {
        min: 1,
        max: 2,
        exclude: [1, 2],
      },
    });

    expect(rand.choose()).toBe(undefined);
  });

  it('should throw an error for icorrect min and max values', () => {
    expect(() => {
      new RandoML({
        settings: {
          min: 3,
          max: 1,
          hold: [1, 4],
        },
      });
    }).toThrow('The minimum value must be less than the maximum value');
  });

  it('should throw an error for the same value for min and max', () => {
    expect(() => {
      new RandoML({
        settings: {
          min: 3,
          max: 3,
        },
      });
    }).toThrow('The minimum and maximum values ​​must be different');
  });

  it('should throw an error for values out of range', () => {
    expect(() => {
      new RandoML({
        settings: {
          min: -3,
          max: 10,
          hold: [1, 5, 12],
        },
      });
    }).toThrow('12 are out of range -3, 10');
  });
});
