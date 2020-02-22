import RandoML from '../src';

describe('onInit callback', () => {
  let done = false;

  new RandoML({
    callbacks: {
      onInit: () => {
        done = true;
      }
    }
  });

  it('it should call on init', () => {
    expect(done).toBe(true);
  });
});

describe('onChoice callback', () => {
  let checkChoice = false;
  let checkResult = false;

  const rand = new RandoML({
    callbacks: {
      onChoice: () => {
        checkChoice = true;
      },
      onResult: () => {
        checkResult = true;
      }
    }
  });

  rand.choose();

  it('it should call on choice', () => {
    expect(checkChoice).toBe(true);
    expect(checkResult).toBe(true);
  });
});

describe('onRangeEnd callback', () => {
  let done = false;

  const rand = new RandoML({
    settings: {
      min: 1,
      max: 2,
      exclude: [1, 2]
    },
    callbacks: {
      onRangeEnd: () => {
        done = true;
      }
    }
  });

  rand.choose();

  it('it should call on end of range', () => {
    expect(done).toBe(true);
  });
});
