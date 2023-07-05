import { UseCaseError } from '@lkie/shared-model';
import { GetDataItemQuery } from '@lkie/sample-api';

export class GetDataItemUseCaseNotFoundError extends UseCaseError {
	constructor(query: GetDataItemQuery) {
		super(`No records found for query: ${JSON.stringify(query)}`);
	}
}

export class GetDataItemUseCaseUnknownError extends UseCaseError {
	constructor(query: GetDataItemQuery) {
		super(`Unknown error occured for query: ${JSON.stringify(query)}`);
	}
}
