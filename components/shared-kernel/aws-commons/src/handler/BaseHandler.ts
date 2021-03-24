/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImmutableDto } from '@lkie/shared-model';
import { UseCase } from './use-case/UseCase';
import { UseCaseResult } from './use-case/UseCaseResult';

export abstract class BaseHandler<I, E extends ImmutableDto<unknown>, U extends UseCase<E, UseCaseResult<unknown>>> {
  constructor(protected readonly useCase: U) {}
  handle(input: I, context: unknown): unknown {
    return this.useCase.process(this.extractEvent(input, context));
  }
  abstract extractEvent(input: I, context: unknown): E;
}
