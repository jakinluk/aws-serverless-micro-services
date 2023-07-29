import { SqsRecordHandler } from '@lkie/aws-commons';
import { UpdateDocLogCommand } from '@lkie/update-gateway-api';
import { Context } from 'aws-lambda';
import { SQSRecord } from 'aws-lambda';
import { UpdateDocLogUseCase } from '../domain/UpdateDocLogUseCase';

export class UpdateDocLogHandler extends SqsRecordHandler<UpdateDocLogCommand, UpdateDocLogUseCase> {
	constructor(useCase: UpdateDocLogUseCase) {
		super(useCase);
	}
	async process(command: UpdateDocLogCommand): Promise<void> {
		const result = await this.useCase.process(command);
		if (result.getError()) {
			throw result.getError();
		}
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	extractEvent(input: SQSRecord, context: Context): UpdateDocLogCommand {
		return UpdateDocLogCommand.fromEvent(input);
	}
}
