import { UseCaseError } from '@lkie/shared-model';
import { UpdateDocLogCommand } from '@lkie/craftdocs-api';

export class UpdateDocLogUseCaseError extends UseCaseError {
	constructor(command: UpdateDocLogCommand) {
		super(`Unknown error occurred for command: ${JSON.stringify(command)}`);
	}
}

