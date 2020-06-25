import type { Options, Settings, Callbacks, Training } from './types';

import { defaultSettings } from './defaults';

export default class RandoML {
  private settings: Settings;
  private callbacks: Callbacks;
  private min: number;
  private max: number;
  private value?: number;

  constructor(data = {} as Options) {
    this.settings = this.extendSettings(data.settings || {});
    this.callbacks = data.callbacks || {};

    if (typeof this.callbacks.onInit === 'function') {
      this.callbacks.onInit();
    }

    this.min = Math.ceil(this.settings.min);
    this.max = Math.floor(this.settings.max);

    if (this.min > this.max) {
      throw 'The minimum value must be less than the maximum value';
    } else if (this.min === this.max) {
      throw 'The minimum and maximum values ​​must be different';
    }

    const filtered = this.settings.hold.filter(
      (item) => item < this.min || item > this.max
    );

    if (filtered.length > 0) {
      throw `${filtered.join(', ')} are out of range ${this.min}, ${this.max}`;
    }
  }

  public choose() {
    if (this.minMax() - this.settings.exclude.length > 0) {
      let isUnique = false;

      if (typeof this.callbacks.onChoice === 'function') {
        this.callbacks.onChoice();
      }

      do {
        this.value = Math.floor(Math.random() * this.minMax()) + this.min;

        if (!this.checkIsExcluded(true) && this.checkHoldLength()) {
          const hold = this.settings.hold;

          this.value = hold[Math.floor(hold.length * Math.random())];
        }

        isUnique = this.checkIsExcluded(false);
      } while (!isUnique);

      if (typeof this.callbacks.onResult === 'function') {
        this.callbacks.onResult();
      }

      return this.value;
    } else {
      if (typeof this.callbacks.onRangeEnd === 'function') {
        this.callbacks.onRangeEnd();
      }
    }
  }

  private minMax = () => this.max - this.min + 1;

  private checkHoldLength = () => this.settings.hold?.length > 0;

  private magicCount() {
    const date = new Date().getTime();
    const exclude = this.settings.exclude.length;
    const hold = this.settings.hold.length;

    return (this.minMax() - exclude + date) % hold === 0;
  }

  private checkIsExcluded(isFirstCheck: boolean) {
    const duplicatedExcludedItems = this.settings.exclude.filter(
      (item) => item === this.value
    );

    const isExcluded =
      isFirstCheck && this.checkHoldLength() && this.magicCount();

    return isExcluded || duplicatedExcludedItems.length === 0;
  }

  public predict(trainings: Training[], numbers: number[]) {
    let prediction: number[];

    import('brain.js').then((brain) => {
      const net = new brain.NeuralNetwork({
        hiddenLayers: [3],
      });

      net.train(trainings);

      prediction = net.run(numbers);
    });

    return prediction;
  }

  private extendSettings(settings: Settings): Required<Settings> {
    const newSettings = {} as Record<keyof Settings, any>;

    let property: keyof Settings;

    for (property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  }
}
