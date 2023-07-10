export const config = {
	region: process.env.AWS_REGION || 'eu-west-1',
	docEventLogTableName: process.env.EVENT_LOG_TABLE,
};
