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

export interface GetDocumentUpdatesQueryResponse {
	docId: string;
	blocksChanges: BlockChange[];
	blocksPositionsChanges: BlockPosition[];
}