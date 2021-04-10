import { UseCase, UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemGateway } from './GetDataItemGateway';
import { GetDataItemUseCaseUnknownError } from './GetDataItemUseCaseErrors';

export class GetDataItemUsecase implements UseCase<GetDataItemQuery, UseCaseResult<GetDataItemResponse>> {
	constructor(private readonly getDataItemGateway: GetDataItemGateway) {}
	async process(query: GetDataItemQuery): Promise<UseCaseResult<GetDataItemResponse>> {
		try {
			return await this.getDataItemGateway.getDataItem(query);
		} catch (ex) {
			console.error(ex);
			return UseCaseResult.failure(new GetDataItemUseCaseUnknownError(query));
		}
	}
}
