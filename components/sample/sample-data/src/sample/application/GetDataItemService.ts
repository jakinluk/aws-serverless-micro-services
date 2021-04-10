import { UseCaseResult } from '@lkie/aws-commons';
import { GetDataItemQuery, GetDataItemResponse } from '@lkie/sample-api';
import { GetDataItemGateway } from '../domain/GetDataItemGateway';
import { GetDataItemUseCaseNotFoundError } from '../domain/GetDataItemUseCaseErrors';
import { ItemMapper } from '../domain/ItemMapper';
import { ItemRepository } from './repository/ItemRepository';

export class GetDataItemService implements GetDataItemGateway {
	constructor(private readonly repository: ItemRepository) {}
	async getDataItem(
		query: GetDataItemQuery,
	): Promise<UseCaseResult<GetDataItemResponse, GetDataItemUseCaseNotFoundError>> {
		const item = await this.repository.getItem(query.toValue().id);
		if (item) {
			const response: GetDataItemResponse = ItemMapper.toDomain(item).getProps();
			return UseCaseResult.success(response);
		} else {
			return UseCaseResult.failure(new GetDataItemUseCaseNotFoundError(query));
		}
	}
}
