import RecursiveTableRow from '../RecursiveTableRow';
import styles from './TableRow.module.scss';
import { TableColumnProps } from './TableRow.types';

const TableColumn = (props: TableColumnProps) => {
	const { headerData, rowData } = props;

	const headerRows = (
		<div className={styles.TableColumn}>
			<h2>{headerData?.title}</h2>
		</div>
	);

	return (
		<>
			{headerData && headerRows}
			{rowData && (
				<div>
					<RecursiveTableRow {...rowData} />
				</div>
			)}
		</>
	);
};

export default TableColumn;
