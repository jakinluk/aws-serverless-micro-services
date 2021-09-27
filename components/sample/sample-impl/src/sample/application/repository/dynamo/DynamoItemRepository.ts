import { ItemRepository } from '../ItemRepository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class DynamoItemRepository implements ItemRepository {
	constructor(private readonly documentClient: DocumentClient, private readonly tableName: string) {}
	private static readonly KEY_PREFIX = 'ITEM_ID#';
	private static readonly SORT_PREFIX = 'ITEM#';
	async getItem(id: string): Promise<{ [key: string]: unknown }> {
		const { Item } = await this.documentClient.get({ TableName: this.tableName, Key: this.buildKey(id) }).promise();
		const res = await this.documentClient.scan({ TableName: this.tableName }).promise();
		return Item ? this.strip(Item) : undefined;
	}
	private buildKey(id: string): DocumentClient.Key {
		return { pk: `${DynamoItemRepository.KEY_PREFIX}${id}`, sk: DynamoItemRepository.SORT_PREFIX };
	}
	private strip(item: DocumentClient.AttributeMap): { [key: string]: unknown } {
		const { pk, sk, ...rest } = item;
		return rest;
	}
}
