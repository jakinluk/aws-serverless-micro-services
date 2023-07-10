import { UpdateDocLogCommand } from '@lkie/update-gateway-api';
import { Entity } from '@lkie/shared-model';
import { EntityId } from '@lkie/shared-model';

interface BlockChange {
	blockId: string;
	startPos: number;
	endPos: number;
	text: string;
}

interface BlockPosition {
	blockId: string;
	x: number;
	y: number;
}

export interface DocEventLogProps {
	docId: string;
	uuid: string;
	clientTimestamp: number;
	serverTimestamp: number;
	userId: string;
	deviceId: string;
	blocksChanges: BlockChange[];
	blocksPositionsChanges: BlockPosition[];
	createdAt: string;
}


// Item props and Item (Entity)
export class DocEventLog extends Entity<DocEventLogProps> {
	constructor(props: DocEventLogProps ){
		super(props, new EntityId(props.uuid));
	}
	update(newItem: DocEventLog):void {
		this.props = newItem.getProps();
	}
	static createFrom(command: UpdateDocLogCommand): DocEventLog {
		return new DocEventLog({
			...command.toValue(),
			createdAt: new Date().toISOString(),
		});
	}

}
