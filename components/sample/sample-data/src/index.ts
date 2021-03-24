import { Context } from 'aws-lambda/handler';
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';
import { GetDataItemHandlerConfiguration } from './sample/handler/GetDataItemHandlerConfiguration';

export const getDataItemHandler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  return GetDataItemHandlerConfiguration.getHandler().handle(event, context);
};
