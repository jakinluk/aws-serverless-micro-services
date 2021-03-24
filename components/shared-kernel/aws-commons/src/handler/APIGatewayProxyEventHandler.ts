import { ImmutableDto } from '@lkie/shared-model';
import { Context } from 'aws-lambda/handler';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda/trigger/api-gateway-proxy';
import { BaseHandler } from './BaseHandler';
import { UseCase } from './use-case/UseCase';
import { UseCaseResult } from './use-case/UseCaseResult';

export abstract class APIGatewayProxyEventHandler<
  E extends ImmutableDto<unknown>,
  U extends UseCase<E, UseCaseResult<unknown>>
> extends BaseHandler<APIGatewayProxyEvent, E, U> {
  abstract process(event: E): APIGatewayProxyResult;

  handle(input: APIGatewayProxyEvent, context: Context): APIGatewayProxyResult {
    try {
      return this.process(this.extractEvent(input, context));
    } catch (err) {
      console.log(err);
      return APIGatewayProxyEventHandler.internalServerError();
    }
  }
  static ok(result: unknown): APIGatewayProxyResult {
    return { statusCode: 200, body: result ? JSON.stringify(result) : '' };
  }
  static internalServerError(): APIGatewayProxyResult {
    return { statusCode: 500, body: 'Internal server error' };
  }
  static created(): APIGatewayProxyResult {
    return { statusCode: 201, body: '' };
  }
  // ...
}
//TODO: add APIGatewayProxyResultBuilder with predefined headers and CORS settings
