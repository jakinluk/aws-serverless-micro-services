/* eslint-disable no-mixed-spaces-and-tabs */
import { freeze } from 'freeze-mutate';
import { Dto } from './Dto';

// eslint-disable-next-line @typescript-eslint/ban-types
export class ImmutableDto<T extends object> implements Dto<T> {
  protected readonly props: T;
  constructor(props: T) {
  	this.props = freeze<T>(props);
  }
  toJSON(): unknown {
  	return { ...this.props };
  }

  toValue(): T {
  	return this.props;
  }
}
