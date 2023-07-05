export const config = {
	tableName: process.env.TABLE_NAME || 'items',
	region: process.env.AWS_REGION || 'eu-west-1',
};
