export type Callbacks = {
  readonly onInit?: () => void;
  readonly onRandomize?: () => void;
  readonly onResult?: () => void;
  readonly onRangeEnd?: () => void;
};
