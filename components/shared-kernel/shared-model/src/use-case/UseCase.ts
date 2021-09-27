/* eslint-disable @typescript-eslint/ban-types */
import { ImmutableDto } from '../event/ImmutableDto';
import { UseCaseResult } from './UseCaseResult';

export interface UseCase<I extends ImmutableDto<object>, R extends UseCaseResult<object>> {
  process(input: I): Promise<R>;
}

