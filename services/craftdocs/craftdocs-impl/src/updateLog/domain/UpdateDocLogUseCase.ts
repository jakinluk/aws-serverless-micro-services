import { UseCase } from '@lkie/shared-model';
import { UpdateDocLogUseCaseError } from './UpdateDocLogUseCaseErrors';
import { UpdateDocLogCommand } from '@lkie/craftdocs-api';
import { PersistGateway } from './PersistGateway';
import { UseCaseVoidResult } from '@lkie/shared-model/src/use-case/UseCaseVoidResult';

export class UpdateDocLogUseCase implements UseCase<UpdateDocLogCommand, UseCaseVoidResult> {
	constructor(private readonly persistGateway: PersistGateway) {}
	async process(command: UpdateDocLogCommand): Promise<UseCaseVoidResult> {
		try {
			return await this.persistGateway.persist(command);
		} catch (ex) {
			console.error(ex);
			return UseCaseVoidResult.failure(new UpdateDocLogUseCaseError(command));
		}
	}
}
