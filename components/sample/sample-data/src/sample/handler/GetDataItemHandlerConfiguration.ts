import { GetDataItemUsecase } from '../domain/GetDataItemUseCase';
import { GetDataItemHandler } from './GetDataItemHandler';

export class GetDataItemHandlerConfiguration {
  static getHandler(): GetDataItemHandler {
    return new GetDataItemHandler(new GetDataItemUsecase());
  }
}
