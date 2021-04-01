import { ImmutableDto } from '@lkie/shared-model';
import { UseCaseResult } from './UseCaseResult';

export interface UseCase<I extends ImmutableDto<unknown>, R extends UseCaseResult<unknown>> {
	process(input: I): Promise<R>;
}
