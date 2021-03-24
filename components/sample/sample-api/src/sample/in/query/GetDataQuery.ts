import { ImmutableDto } from '@lkie/shared-model/src/event/ImmutableDto';

export interface GetDataQueryProps {
  prop1: string;
  prop2: string;
}

export class GetDataQuery extends ImmutableDto<GetDataQueryProps> {
  constructor(props: GetDataQueryProps) {
    super(props);
  }
}
