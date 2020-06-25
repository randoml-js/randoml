import RandoML from '../src';

describe('callbacks', () => {
  it('it should call onInit', () => {
    const onInit = jest.fn();

    new RandoML({
      callbacks: {
        onInit,
      },
    });

    expect(onInit).toHaveBeenCalled();
  });

  it('it should call onChoice and onResult', () => {
    const onChoice = jest.fn();
    const onResult = jest.fn();

    const rand = new RandoML({
      callbacks: {
        onChoice,
        onResult,
      },
    });

    rand.choose();

    expect(onChoice).toHaveBeenCalled();
    expect(onResult).toHaveBeenCalled();
  });

  it('it should call onRangeEnd', () => {
    const onRangeEnd = jest.fn();

    const rand = new RandoML({
      settings: {
        min: 1,
        max: 2,
        exclude: [1, 2],
      },
      callbacks: {
        onRangeEnd,
      },
    });

    rand.choose();

    expect(onRangeEnd).toHaveBeenCalled();
  });
});
