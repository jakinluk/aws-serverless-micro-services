import { APIGatewayProxyEventHandler } from '@lkie/aws-commons';
import { UpdateDocCommand } from '@lkie/craftdocs-api';
import { APIGatewayProxyResult, APIGatewayProxyEvent, Context } from 'aws-lambda';
import { UpdateDocUseCase } from '../domain/UpdateDocUseCase';

export class UpdateDocHandler extends APIGatewayProxyEventHandler<UpdateDocCommand, UpdateDocUseCase> {
	constructor(useCase: UpdateDocUseCase) {
		super(useCase);
	}
	async process(command: UpdateDocCommand): Promise<APIGatewayProxyResult> {
		const result = await this.useCase.process(command);
		if (result.getError()) {
			if (result.getError() ) {
				return APIGatewayProxyEventHandler.internalServerError(result.getError().message);
			}
		} else {
			return APIGatewayProxyEventHandler.ok(result.getValue());
		}
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	extractEvent(input: APIGatewayProxyEvent, context: Context): UpdateDocCommand {
		return UpdateDocCommand.fromEvent(input);
	}
}
