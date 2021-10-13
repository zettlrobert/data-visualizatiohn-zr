import React from 'react';
import { AllocationData } from '../../App';
import TableRow from '../TableRow';
import styles from './Table.module.scss';
import { ColumnHeader, Row } from './Table.types';

const Table = () => {
	/* Access Context Data */
	const data = React.useContext(AllocationData);

	return (
		<div className={styles.TableContainer}>
			<div className={styles.TableColumnsContainer}>
				{data.columnSetHeaders.map((column: ColumnHeader) => (
					<TableRow key={column.title} headerData={column} />
				))}
			</div>
			{data.lines.map((row: Row) => (
				<TableRow key={row.id} rowData={row} />
			))}
		</div>
	);
};

export default Table;
