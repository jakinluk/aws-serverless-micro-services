import { GetDataItemGateway } from '../domain/GetDataItemGateway';
import { GetDataItemUsecase } from '../domain/GetDataItemUseCase';
import { GetDataItemHandler } from './GetDataItemHandler';

export class GetDataItemHandlerConfiguration {
	static getHandler(getDataItemGateway: GetDataItemGateway): GetDataItemHandler {
		return new GetDataItemHandler(new GetDataItemUsecase(getDataItemGateway));
	}
}
