export interface Dto<T> {
  toJSON(): unknown;
  toValue(): T;
}
