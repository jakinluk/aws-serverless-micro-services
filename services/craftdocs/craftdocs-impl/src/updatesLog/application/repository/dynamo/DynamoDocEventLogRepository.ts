import { DocEventLog } from '../../../domain/model/DocEventLog';
import { DocEventLogRepository } from '../DocEventLogRepository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class DynamoDocEventLogRepository implements DocEventLogRepository {
	constructor(private readonly documentClient: DocumentClient, private readonly tableName: string) {}
	
	private static readonly KEY_PREFIX = 'LOG_ID#';
	private static readonly SORT_PREFIX = 'ID#';

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
	}

	private strip(item: DocumentClient.AttributeMap): Record<string, unknown>  {
		const { pk, sk, ...rest } = item;
		return rest;
	}
}
