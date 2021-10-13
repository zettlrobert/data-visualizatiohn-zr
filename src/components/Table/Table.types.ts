export interface ColumnHeader {
	title: string;
	cssClass: string;
	subHeader?: string;
}

export interface RowValues {
	value?: string;
	values?: string[];
	cssClass?: string;
}

export interface Row {
	id: string;
	lineName: string;
	lineOriginalName: string;
	description: null | any;
	hideNode: boolean;
	cssClass: string;
	isEmpty: boolean;
	isShadow: boolean;
	nodeTypes: number;
	lineValues: RowValues[];
	subLines?: Row[];
}

