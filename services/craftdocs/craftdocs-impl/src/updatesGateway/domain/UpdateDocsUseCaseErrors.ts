import { UseCaseError } from '@lkie/shared-model';
import { UpdateDocCommand } from '@lkie/craftdocs-api';

export class UpdateDocUseCaseError extends UseCaseError {
	constructor(query: UpdateDocCommand) {
		super(`Unknown error occured for command: ${JSON.stringify(query)}`);
	}
}

