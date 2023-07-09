import { ItemRepository } from '../ItemRepository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class DynamoItemRepository implements ItemRepository {
	constructor(private readonly documentClient: DocumentClient, private readonly tableName: string) {}
	private static readonly KEY_PREFIX = 'ITEM_ID#';
	private static readonly SORT_PREFIX = 'ITEM#';
	async getItem(id: string): Promise<Record<string, unknown>> {
		const { Item } = await this.documentClient.get({ TableName: this.tableName, Key: this.buildKey(id) }).promise();
		return Item ? this.strip(Item) : null;
	}
	private buildKey(id: string): DocumentClient.Key {
		return { pk: `${DynamoItemRepository.KEY_PREFIX}${id}`, sk: DynamoItemRepository.SORT_PREFIX };
	}
	private strip(item: DocumentClient.AttributeMap): Record<string, unknown>  {
		const { pk, sk, ...rest } = item;
		return rest;
	}
}
