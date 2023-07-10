import { DocEventLog } from '../../../domain/model/DocEventLog';
import { DocEventLogRepository } from '../DocEventLogRepository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class DynamoDocEventLogRepository implements DocEventLogRepository {
	constructor(private readonly documentClient: DocumentClient, private readonly tableName: string) {}
	
	private static readonly KEY_PREFIX = 'LOG_ID#';
	private static readonly SORT_PREFIX = 'ID#';

	// private static readonly KEY_PREFIX = 'DOC_ID#';
	// private static readonly SORT_PREFIX = 'TIMESTAMP#';


	// async getItem(id: string): Promise<Record<string, unknown>> {
	// 	const { Item } = await this.documentClient.get({ TableName: this.tableName, Key: this.buildKey(id) }).promise();
	// 	return Item ? this.strip(Item) : null;
	// }

	async save(log: DocEventLog): Promise<void> {
		await this.documentClient
			.put({
				TableName: this.tableName,
				Item: {
					...this.buildKey(log.getId().value() as string),
					...log.getProps(),
				},
			})
			.promise();
	}
	


	private buildKey(logId: string): DocumentClient.Key {
		return { pk: `${DynamoDocEventLogRepository.KEY_PREFIX}${logId}`, sk: DynamoDocEventLogRepository.SORT_PREFIX };
		// return { pk: `${DynamoItemRepository.KEY_PREFIX}${docId}`, sk: DynamoItemRepository.SORT_PREFIX + timestamp }; // make it secondary key
	}

	private strip(item: DocumentClient.AttributeMap): Record<string, unknown>  {
		const { pk, sk, ...rest } = item;
		return rest;
	}
}
