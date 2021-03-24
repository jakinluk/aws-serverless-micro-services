import { APIGatewayProxyEventHandler } from '@lkie/aws-commons';
import { GetDataItemQuery } from '@lkie/sample-api';
import { APIGatewayProxyResult, APIGatewayProxyEvent, Context } from 'aws-lambda';
import { GetDataItemUsecase } from '../domain/GetDataItemUseCase';

export class GetDataItemHandler extends APIGatewayProxyEventHandler<GetDataItemQuery, GetDataItemUsecase> {
  constructor(useCase: GetDataItemUsecase) {
    super(useCase);
  }
  process(query: GetDataItemQuery): APIGatewayProxyResult {
    const result = this.useCase.process(query);
    return APIGatewayProxyEventHandler.ok(result.getValue());
  }
  extractEvent(input: APIGatewayProxyEvent, context: Context): GetDataItemQuery {
    return GetDataItemQuery.fromEvent(input);
  }
}
