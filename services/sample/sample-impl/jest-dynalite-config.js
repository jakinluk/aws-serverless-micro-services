module.exports = {
	tables: [
		{
			TableName: 'item',
			KeySchema: [{ AttributeName: 'pk', KeyType: 'HASH' },{ AttributeName: 'sk', KeyType: 'RANGE' }],
			AttributeDefinitions: [{ AttributeName: 'pk', AttributeType: 'S' }, { AttributeName: 'sk', AttributeType: 'S' }],
			BillingMode: 'PAY_PER_REQUEST',
		},
	],
	basePort: 8000,
};