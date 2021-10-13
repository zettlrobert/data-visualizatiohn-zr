import { createUUID } from '../../uuid';
import { Row } from '../Table/Table.types';
import styles from './RecursiveTableRow.module.scss';

const RecursiveTableRow = (props: Row) => {
	const { lineName, lineValues, id, subLines, description, cssClass } = props;

	// Check if there are children on the props
	const hasChildren = subLines && subLines.length > 0;

	return (
		<section className={styles.Row}>
			<div
				className={`
				${styles.RowTitle}
			    ${styles[`${cssClass}`]}
			`}
			>
				<h4>
					{lineName}
					<div className={styles.id}>{`id: ${id}`}</div>
				</h4>
				<h5>{cssClass}</h5>
			</div>
			{description && <>{description}</>}
			<div className={styles.RecursiveRowContainer}>
				{lineValues.map((value: any) => {
					const uuidForKey = createUUID();
					return (
						<div
							className={`
	    					${styles.RecursiveValueContainer}
		    				${styles[value.cssClass]}
					`}
							key={uuidForKey}
						>
							{value.value}
						</div>
					);
				})}
			</div>

			{/* recursively call the component if there additional sublines */}
			{hasChildren &&
				subLines.map((subLine: Row) => (
					<div key={subLine.id} className={styles.SubRow}>
						<RecursiveTableRow {...subLine} />
					</div>
				))}
		</section>
	);
};

export default RecursiveTableRow;
