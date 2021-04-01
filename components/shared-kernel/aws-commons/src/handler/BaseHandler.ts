/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImmutableDto } from '@lkie/shared-model';
import { UseCase } from './use-case/UseCase';
import { UseCaseResult } from './use-case/UseCaseResult';

export abstract class BaseHandler<I, E extends ImmutableDto<unknown>, U extends UseCase<E, UseCaseResult<unknown>>> {
	constructor(protected readonly useCase: U) {}
	async handle(input: I, context: unknown): Promise<unknown> {
		return await this.useCase.process(this.extractEvent(input, context));
	}
	abstract extractEvent(input: I, context: unknown): E;
}
