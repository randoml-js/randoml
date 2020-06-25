export type Callbacks = {
  readonly onInit?: () => void;
  readonly onChoice?: () => void;
  readonly onResult?: () => void;
  readonly onRangeEnd?: () => void;
};
