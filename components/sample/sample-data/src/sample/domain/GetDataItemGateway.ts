import { UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemUseCaseNotFoundError, GetDataItemUseCaseUnknownError } from './GetDataItemUseCaseErrors';

export interface GetDataItemGateway {
	getDataItem(
		query: GetDataItemQuery,
	): Promise<UseCaseResult<GetDataItemResponse, GetDataItemUseCaseNotFoundError | GetDataItemUseCaseUnknownError>>;
}

// import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';

// export interface GetDataItemGateway {
// 	getDataItem(query: GetDataItemQuery): Promise<GetDataItemResponse>;
// }
