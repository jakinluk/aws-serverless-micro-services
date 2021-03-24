import { ImmutableDto } from '@lkie/shared-model';
import { UseCaseResult } from './UseCaseResult';

export interface UseCase<I extends ImmutableDto<any>, R extends UseCaseResult<any>> {
  process(input: I): R;
}
