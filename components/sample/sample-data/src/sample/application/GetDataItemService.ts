import { UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemGateway } from '../domain/GetDataItemGateway';
import { GetDataItemUseCaseNotFoundError, GetDataItemUseCaseUnknownError } from '../domain/GetDataItemUseCaseErrors';
import { ItemMapper } from '../domain/ItemMapper';
import { GetDataItemRepository } from './repository/GetDataItemRepository';

export class GetDataItemService implements GetDataItemGateway {
	constructor(private readonly repository: GetDataItemRepository) {}
	async getDataItem(
		query: GetDataItemQuery,
	): Promise<UseCaseResult<GetDataItemResponse, GetDataItemUseCaseNotFoundError | GetDataItemUseCaseUnknownError>> {
		const response: GetDataItemResponse = ItemMapper.toDomain(await this.repository.getItem(query.toValue().id));
		return UseCaseResult.success(response);
	}
}
