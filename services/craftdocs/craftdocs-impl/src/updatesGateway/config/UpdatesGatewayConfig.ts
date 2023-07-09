export const config = {
	region: process.env.AWS_REGION || 'eu-west-1',
	updatesTopicArn: process.env.UPDATES_TOPIC_ARN,
	updateDocQueueUrl: process.env.UPDATE_QUEUE_URL,
};
