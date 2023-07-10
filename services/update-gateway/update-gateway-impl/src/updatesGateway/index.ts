import { Context } from 'aws-lambda/handler';
import {
	APIGatewayProxyEvent,
	APIGatewayProxyHandler,
	APIGatewayProxyResult,
} from 'aws-lambda/trigger/api-gateway-proxy';
import { UpdateDocHandlerConfiguration } from './handler/UpdateDocHandlerConfiguration';

const handler = UpdateDocHandlerConfiguration.getHandler();

export const updatesGatewayHandler: APIGatewayProxyHandler = async (
	event: APIGatewayProxyEvent,
	context: Context,
): Promise<APIGatewayProxyResult> => {
	return await handler.handle(event, context);
};
