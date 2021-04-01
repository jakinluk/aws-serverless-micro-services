import { UseCase, UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemGateway } from './GetDataItemGateway';

export class GetDataItemUsecase implements UseCase<GetDataItemQuery, UseCaseResult<GetDataItemResponse>> {
	constructor(private readonly getDataItemGateway: GetDataItemGateway) {}
	async process(query: GetDataItemQuery): Promise<UseCaseResult<GetDataItemResponse>> {
		return await this.getDataItemGateway.getDataItem(query);
		// const response: GetDataItemResponse = await this.getDataItemGateway.getDataItem(query);
		// 		return UseCaseResult.success<GetDataItemResponse>(response);
	}
}
