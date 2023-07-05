import { APIGatewayProxyEventHandler } from '@lkie/aws-commons';
import { GetDataItemQuery } from '@lkie/sample-api';
import { APIGatewayProxyResult, APIGatewayProxyEvent, Context } from 'aws-lambda';
import { GetDataItemUsecase } from '../domain/GetDataItemUseCase';
import { GetDataItemUseCaseNotFoundError } from '../domain/GetDataItemUseCaseErrors';

export class GetDataItemHandler extends APIGatewayProxyEventHandler<GetDataItemQuery, GetDataItemUsecase> {
	constructor(useCase: GetDataItemUsecase) {
		super(useCase);
	}
	async process(query: GetDataItemQuery): Promise<APIGatewayProxyResult> {
		const result = await this.useCase.process(query);
		if (result.getError()) {
			if (result.getError() instanceof GetDataItemUseCaseNotFoundError) {
				return APIGatewayProxyEventHandler.notFound(result.getError().message);
			} else {
				return APIGatewayProxyEventHandler.internalServerError(result.getError().message);
			}
		} else {
			return APIGatewayProxyEventHandler.ok(result.getValue());
		}
	}
	extractEvent(input: APIGatewayProxyEvent, context: Context): GetDataItemQuery {
		return GetDataItemQuery.fromEvent(input);
	}
}
