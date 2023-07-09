import { UseCaseError } from './UseCaseError';

export class UseCaseResult<V, E = UseCaseError> {
	private readonly value: V;
	constructor(value: V, private error: E) {
		this.value = Object.freeze(value);
	}
	getError(): E {
		return this.error;
	}
	getValue(): V {
		if (this.error) {
			throw new Error(`Result is in an error state. Error: ${JSON.stringify(this.error)}`);
		}
		return this.value;
	}
	static failure<E>(error: E): UseCaseResult<undefined, E> {
		return new UseCaseResult(undefined, error);
	}
	static success<V>(value: V): UseCaseResult<V, undefined> {
		return new UseCaseResult(value, undefined);
	}
}
