import { Settings, Methods } from './types';

type Options = {
  settings: Settings;
  methods: Methods;
};

export default class RandoML {
  private settings: Settings;
  private methods: Methods;
  private number: number;
  private min: number;
  private max: number;

  constructor(data: Options) {
    this.settings = data.settings || {};
    this.methods = data.methods || {};

    if (typeof this.methods.onInit === 'function') {
      this.methods.onInit();
    }

    this.min = Math.ceil(this.settings.min);
    this.max = Math.floor(this.settings.max);
  }

  public randomize = () => {
    if (this.minMax() - this.settings.exclude.length > 0) {
      let unique: boolean = false;

      if (typeof this.methods.onRandomize === 'function') {
        this.methods.onRandomize();
      }

      do {
        this.number = Math.floor(Math.random() * this.minMax()) + this.min;

        if (!this.isExcluded(true) && this.checkLength()) {
          const array: number[] = this.settings.hold;

          this.number = array[Math.floor(array.length * Math.random())];
        }

        unique = this.isExcluded(false);
      } while (!unique);

      if (typeof this.methods.onResult === 'function') {
        this.methods.onResult();
      }

      return this.number;
    } else {
      if (typeof this.methods.onRangeEnd === 'function') {
        this.methods.onRangeEnd();
      }
    }
  };

  private minMax = (): number => this.max - this.min + 1;

  private checkLength = (): boolean => {
    return this.settings.hold && this.settings.hold.length > 0;
  };

  private magicCount = (): boolean => {
    const date = new Date().getTime();
    const exclude = this.settings.exclude.length;
    const hold = this.settings.hold.length;

    return (this.minMax() - exclude + date) % hold === 0;
  };

  private isExcluded = (firstCheck: boolean): boolean => {
    const duplicated = this.settings.exclude.filter(
      item => item === this.number
    );

    let condition: boolean = duplicated.length === 0;

    const check: boolean = firstCheck && this.checkLength() && this.magicCount();

    if (check) condition = !check;

    return condition;
  };
}
