/* eslint-disable @typescript-eslint/ban-types */
import { ImmutableDto } from '../event/ImmutableDto';
import { UseCaseResult } from './UseCaseResult';
import { UseCaseVoidResult } from './UseCaseVoidResult';

export interface UseCase<I extends ImmutableDto<object>, R extends UseCaseResult<object> | UseCaseVoidResult> {
  process(input: I): Promise<R>;
}

