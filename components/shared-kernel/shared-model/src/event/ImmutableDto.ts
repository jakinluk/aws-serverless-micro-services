import { freeze } from 'freeze-mutate';
import { Dto } from './Dto';

export class ImmutableDto<T> implements Dto<T> {
	protected readonly props: T;
	constructor(props: T) {
		this.props = freeze(props);
	}
	toJSON(): unknown {
		return { ...this.props };
	}

	toValue(): T {
		return this.props;
	}
}
