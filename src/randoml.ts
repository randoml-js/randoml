import Brain from 'brain.js';

interface Options {
  min?: number;
  max?: number;
  exclude?: [number];
  held?: [number];
  startQueue?: void;
  endQueue?: void;
}

export default class RandoML<Options> {
  brain: any;

  constructor({ min, max, exclude, held }) {
    this.randomize(min, max, exclude);

    localStorage.setItem('exclude', '');
    localStorage.setItem('held', '');
  }

  private randomize = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    exclude.map(item => item !== randomNumber);

    randomNumber !== exclude ? randomNumber : randomNumber + 1;
  };

  private neural = () => {};
}
