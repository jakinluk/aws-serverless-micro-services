import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { DynamoItemRepository } from './DynamoItemRepository';

describe('DynamoItemRepository related tests', () => {
	const documentClient = new DocumentClient({
		service: new DynamoDB({
			...(process.env.MOCK_DYNAMODB_ENDPOINT && {
				endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
				sslEnabled: false,
				region: 'local',
			}),
		}),
	});
	const itemRepository = new DynamoItemRepository(documentClient, 'item');

	const buildKey = (id: string): DocumentClient.Key => {
		return { pk: `ITEM_ID#${id}`, sk: 'ITEM#' };
	};
	const addItem = async (item: { [key: string]: unknown }, id: string): Promise<void> => {
		await documentClient.put({ TableName: 'item', Item: { ...buildKey(id), ...item } }).promise();
	};

	it('should get item successfuly ', async () => {
		//given
		const item = {
			id: 'hjjhsjh',
			prop1: 'prop1',
			prop2: 'prop2',
		};
		await addItem(item, item.id);
		//when
		const res = await itemRepository.getItem(item.id);
		//then
		expect(res).toEqual(item);
	});
});