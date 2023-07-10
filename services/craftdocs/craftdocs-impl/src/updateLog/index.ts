import { Context } from 'aws-lambda/handler';
import { UpdateDocLogHandlerConfiguration } from './handler/UpdateDocHandlerConfiguration';
import { BatchedQueueEventsProcessor } from '@lkie/aws-commons';
import { SQSBatchResponse, SQSEvent } from 'aws-lambda';

const handler = UpdateDocLogHandlerConfiguration.getHandler();

export const updateDocLogHandler = async (
	event: SQSEvent,
	context: Context,
): Promise<SQSBatchResponse> => {
	return await new BatchedQueueEventsProcessor().processEvent(event, context, handler.handle);
};
