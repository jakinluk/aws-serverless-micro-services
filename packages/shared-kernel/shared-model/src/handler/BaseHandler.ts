/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImmutableDto } from '../event/ImmutableDto';
import { UseCase } from '../use-case/UseCase';
import { UseCaseResult } from '../use-case/UseCaseResult';
import { UseCaseVoidResult } from '../use-case/UseCaseVoidResult';


export abstract class BaseHandler<I, E extends ImmutableDto<object>, U extends UseCase<E, UseCaseResult<object> | UseCaseVoidResult>> {
	constructor(protected readonly useCase: U) {}
	async handle(input: I, context: unknown): Promise<unknown> {
		return await this.process(this.extractEvent(input, context));
	}
  	abstract extractEvent(input: I, context: unknown): E;
	abstract process(event: E): Promise<any>;

}
