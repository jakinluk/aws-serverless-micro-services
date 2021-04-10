import { UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemUseCaseNotFoundError } from './GetDataItemUseCaseErrors';

export interface GetDataItemGateway {
	getDataItem(query: GetDataItemQuery): Promise<UseCaseResult<GetDataItemResponse, GetDataItemUseCaseNotFoundError>>;
}

// import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';

// export interface GetDataItemGateway {
// 	getDataItem(query: GetDataItemQuery): Promise<GetDataItemResponse>;
// }
