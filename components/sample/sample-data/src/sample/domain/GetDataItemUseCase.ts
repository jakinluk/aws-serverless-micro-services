import { UseCase, UseCaseError, UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';

export class GetDataItemUsecase implements UseCase<GetDataItemQuery, UseCaseResult<GetDataItemResponse>> {
  process(query: GetDataItemQuery): UseCaseResult<GetDataItemResponse, UseCaseError> {
    throw new Error('Method not implemented.');
  }
}
