/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ImmutableDto } from '@lkie/shared-model';
import { UseCase, UseCaseResult, BaseHandler } from '@lkie/shared-model';
import { Context } from 'aws-lambda/handler';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda/trigger/api-gateway-proxy';

export abstract class APIGatewayProxyEventHandler<
  E extends ImmutableDto<object>,
  U extends UseCase<E, UseCaseResult<object>>
> extends BaseHandler<APIGatewayProxyEvent, E, U> {
  abstract process(event: E): Promise<APIGatewayProxyResult>;

  async handle(input: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  	try {
  		// eslint-disable-next-line indent
      return await this.process(this.extractEvent(input, context));
  	} catch (err) {
  		console.log(err);
  		return APIGatewayProxyEventHandler.internalServerError();
  	}
  }
  static ok(result: unknown): APIGatewayProxyResult {
  	return { statusCode: 200, body: result ? JSON.stringify(result) : '' };
  }
  static internalServerError(message?: string): APIGatewayProxyResult {
  	return { statusCode: 500, body: message ? message : 'Internal server error' };
  }
  static notFound(message?: string): APIGatewayProxyResult {
  	return { statusCode: 404, body: message ? message : 'not found' };
  }
  static created(): APIGatewayProxyResult {
  	return { statusCode: 201, body: '' };
  }
  // ...
}
