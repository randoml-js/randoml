export interface Callbacks {
  onInit?: () => void;
  onChoice?: () => void;
  onResult?: () => void;
  onRangeEnd?: () => void;
}
