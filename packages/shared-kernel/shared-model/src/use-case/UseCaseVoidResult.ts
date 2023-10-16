import { UseCaseError } from './UseCaseError';

export class UseCaseVoidResult<E = UseCaseError | undefined> {
	constructor(private error: E) {}

	getError(): E {
		return this.error;
	}

	getValue(): undefined {
		if (this.error) {
			throw new Error(`Result is in an error state. Error: ${JSON.stringify(this.error)}`);
		}
		return undefined;
	}
	static failure<E>(error: E): UseCaseVoidResult<E> {
		return new UseCaseVoidResult(error);
	}
	static success(): UseCaseVoidResult<undefined> {
		return new UseCaseVoidResult(undefined);
	}
}
