import styles from './Legend.module.scss';

const Legend = () => {
	/* eslint-disable-next-line */
	console.log('Legend');
	return (
		<div className={styles.Legend}>
			<div className={styles.ToggleLegend}>?</div>
			<div className={styles.LegendPopover}>
				<h3>Legend</h3>
				<p>Hint: Scrolling is possible while the popover is displayed</p>

				<div className={styles.ColorLegend}>
					<div className={styles.Allocations}>Allocations</div>
					<div className={styles.Classifications}>Classifications</div>
					<div className={styles.Ownership}>Ownership</div>
					<div className={styles.Security}>Security</div>
				</div>
			</div>
		</div>
	);
};

export default Legend;
