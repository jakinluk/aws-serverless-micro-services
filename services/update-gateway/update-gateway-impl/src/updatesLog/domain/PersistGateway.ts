import { UpdateDocLogCommand } from '@lkie/update-gateway-api';
import { UpdateDocLogUseCaseError } from './UpdateDocLogUseCaseErrors';
import { UseCaseVoidResult } from '@lkie/shared-model/src/use-case/UseCaseVoidResult';

export interface PersistGateway {
	persist(command: UpdateDocLogCommand): Promise<UseCaseVoidResult<UpdateDocLogUseCaseError>>;
}