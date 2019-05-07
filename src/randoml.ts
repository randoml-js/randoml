import { Options, Settings, Callbacks } from './types';

import { defaultSettings } from './defaults';

export default class RandoML {
  private settings: Settings;
  private callbacks: Callbacks;
  private min: number;
  private max: number;
  private number?: number;

  constructor(data: Options | any = {}) {
    this.settings = this.extendSettings(data.settings || {});
    this.callbacks = data.callbacks || {};

    if (typeof this.callbacks.onInit === 'function') {
      this.callbacks.onInit();
    }

    this.min = Math.ceil(this.settings.min);
    this.max = Math.floor(this.settings.max);

    if (this.min > this.max) {
      throw 'Minimal value is bigger than maximal value';
    } else if (this.min === this.max) {
      throw 'Minimal and maximal values must be different';
    }

    const filtered: number[] = this.settings.hold.filter(
      item => item < this.min || item > this.max
    );

    if (filtered.length > 0) {
      throw `${filtered.join(', ')} are out of range ${this.min}, ${this.max}`;
    }
  }

  randomize = () => {
    if (this.minMax() - this.settings.exclude.length > 0) {
      let unique: boolean = false;

      if (typeof this.callbacks.onRandomize === 'function') {
        this.callbacks.onRandomize();
      }

      do {
        this.number = Math.floor(Math.random() * this.minMax()) + this.min;

        if (!this.isExcluded(true) && this.checkLength()) {
          const array: number[] = this.settings.hold;

          this.number = array[Math.floor(array.length * Math.random())];
        }

        unique = this.isExcluded(false);
      } while (!unique);

      if (typeof this.callbacks.onResult === 'function') {
        this.callbacks.onResult();
      }

      return this.number;
    } else {
      if (typeof this.callbacks.onRangeEnd === 'function') {
        this.callbacks.onRangeEnd();
      }
    }
  };

  private minMax = (): number => this.max - this.min + 1;

  private checkLength = (): boolean => {
    return this.settings.hold && this.settings.hold.length > 0;
  };

  private magicCount = (): boolean => {
    const date: number = new Date().getTime();
    const exclude: number = this.settings.exclude.length;
    const hold: number = this.settings.hold.length;

    return (this.minMax() - exclude + date) % hold === 0;
  };

  private isExcluded = (first: boolean): boolean => {
    const duplicated: number[] = this.settings.exclude.filter(
      item => item === this.number
    );

    let condition: boolean = duplicated.length === 0;

    const check: boolean = first && this.checkLength() && this.magicCount();

    if (check) condition = !check;

    return condition;
  };

  private extendSettings = (settings: Settings): Settings => {
    const newSettings: Settings = {};

    for (const property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  };
}
