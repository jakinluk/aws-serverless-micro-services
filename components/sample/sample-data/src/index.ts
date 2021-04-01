import { Context } from 'aws-lambda/handler';
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';
import { GetDataItemService } from './sample/application/GetDataItemService';
import { GetDataItemGateway } from './sample/domain/GetDataItemGateway';
import { GetDataItemHandlerConfiguration } from './sample/handler/GetDataItemHandlerConfiguration';

const getDataItemGateway: GetDataItemGateway = new GetDataItemService(null);
export const getDataItemHandler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
	return GetDataItemHandlerConfiguration.getHandler(getDataItemGateway).handle(event, context);
};
