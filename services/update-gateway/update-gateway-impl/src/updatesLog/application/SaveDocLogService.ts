
import { PersistGateway } from '../domain/PersistGateway';
import { UseCaseVoidResult } from '@lkie/shared-model/src/use-case/UseCaseVoidResult';
import { UpdateDocLogUseCaseError } from '../domain/UpdateDocLogUseCaseErrors';
import { UpdateDocLogCommand } from '@lkie/update-gateway-api';
import { DocEventLog } from '../domain/model/DocEventLog';
import { DocEventLogRepository } from './repository/DocEventLogRepository';

export class SaveDocLogService implements PersistGateway {
	constructor(private readonly repository: DocEventLogRepository) {}
	async persist(
		command: UpdateDocLogCommand,
	): Promise<UseCaseVoidResult<UpdateDocLogUseCaseError>> {
		await this.repository.save(DocEventLog.createFrom(command));
		return UseCaseVoidResult.success();
	}
}
