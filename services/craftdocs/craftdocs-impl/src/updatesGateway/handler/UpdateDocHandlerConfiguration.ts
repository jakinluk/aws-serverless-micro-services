import { DistributeUpdatesService } from '../application/DistributeUpdatesService';
import { UpdateDocUseCase } from '../domain/UpdateDocUseCase';
import { UpdateDocHandler } from './UpdateDocHandler';

export class UpdateDocHandlerConfiguration {
	static getHandler(): UpdateDocHandler {
		return new UpdateDocHandler(new UpdateDocUseCase(new DistributeUpdatesService()));
	}
}
