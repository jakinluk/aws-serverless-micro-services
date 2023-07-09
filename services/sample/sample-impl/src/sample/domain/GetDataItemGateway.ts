import { UseCaseResult } from '@lkie/shared-model';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemUseCaseNotFoundError } from './GetDataItemUseCaseErrors';

export interface GetDataItemGateway {
	getDataItem(query: GetDataItemQuery): Promise<UseCaseResult<GetDataItemResponse, GetDataItemUseCaseNotFoundError>>;
}