export const config = {
	tableName: process.env.ITEMS_TABLE || 'items',
	region: process.env.AWS_REGION || 'eu-west-1',
};
