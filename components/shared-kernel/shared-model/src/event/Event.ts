import { freeze } from 'freeze-mutate';

export class Event<T> {
  protected readonly props: T;
  constructor(props: T) {
    this.props = freeze(props);
  }

  getProps(): T {
    return this.props;
  }
}
