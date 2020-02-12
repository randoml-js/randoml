import { Options, Training } from './types';
export default class RandoML {
    private settings;
    private callbacks;
    private min;
    private max;
    private number?;
    constructor(data?: Options);
    choose(): number | undefined;
    private minMax;
    private checkLength;
    private magicCount;
    private isExcluded;
    predict(trainings: Training[], numbers: number[]): number[];
    private extendSettings;
}
