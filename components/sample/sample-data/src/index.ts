import { Context } from 'aws-lambda/handler';
import {
	APIGatewayProxyEvent,
	APIGatewayProxyHandler,
	APIGatewayProxyResult,
} from 'aws-lambda/trigger/api-gateway-proxy';
import { GetDataItemService } from './sample/application/GetDataItemService';
import { DynamoItemRepository } from './sample/application/repository/dynamo/DynamoItemRepository';
import { ItemRepository } from './sample/application/repository/ItemRepository';
import { GetDataItemGateway } from './sample/domain/GetDataItemGateway';
import { GetDataItemHandlerConfiguration } from './sample/handler/GetDataItemHandlerConfiguration';
import { config } from './sample/config/SampleDataConfiguration';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const dynamoDbDocumentClient: DocumentClient = new DocumentClient({ region: config.region });
const itemrepository: ItemRepository = new DynamoItemRepository(dynamoDbDocumentClient, config.tableName);
const getDataItemGateway: GetDataItemGateway = new GetDataItemService(itemrepository);

export const getDataItemHandler: APIGatewayProxyHandler = async (
	event: APIGatewayProxyEvent,
	context: Context,
): Promise<APIGatewayProxyResult> => {
	return await GetDataItemHandlerConfiguration.getHandler(getDataItemGateway).handle(event, context);
};
