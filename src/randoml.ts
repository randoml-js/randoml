import { Settings, Methods } from './types';

type Options = {
  settings: Settings;
  methods: Methods;
};

export default class RandoML {
  private settings: Settings;
  private methods: Methods;

  constructor(data: Options) {
    this.settings = data.settings || {};
    this.methods = data.methods || {};

    if (typeof this.methods.onInit === 'function') {
      this.methods.onInit();
    }
  }

  public randomize = () => {
    let unique: boolean = false;
    let randomNumber: number;

    const min: number = Math.ceil(this.settings.min);
    const max: number = Math.floor(this.settings.max);

    if (typeof this.methods.onRandomize === 'function') {
      this.methods.onRandomize();
    }

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      const isExcluded: number[] = this.settings.exclude.filter(
        item => item === randomNumber
      );

      unique = isExcluded.length === 0;
    } while (!unique);

    if (typeof this.methods.onResult === 'function') {
      this.methods.onResult();
    }
  };
}
