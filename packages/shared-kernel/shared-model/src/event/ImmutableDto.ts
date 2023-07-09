/* eslint-disable no-mixed-spaces-and-tabs */
import { Dto } from './Dto';

// eslint-disable-next-line @typescript-eslint/ban-types
export class ImmutableDto<T extends object> implements Dto<T> {
  protected readonly props: T;
  constructor(props: T) {
  	this.props = Object.freeze(props);
  }
  toJSON(): unknown {
  	return { ...this.props };
  }

  toValue(): T {
  	return this.props;
  }
}
