import React from 'react';
import Allocations from './data/allocation.json';

const App = () => {
	/*  TODO: create interface for allocation data
	 * Note: A store could be used if more data sets are provided - for this use case i decided on context.
	 * */

	/* Context Object (AllocationData) */
	const AllocationData = React.createContext<null | any>(null);

	const test = 'teststring';
	return (
		<div className="App">
			<header className="App-header">
				<h1>data-visualization-zr</h1>
				{test}
			</header>
			{/* For this demo all Components will have Access to all Data */}
			<AllocationData.Provider value={Allocations}>
				<p>Data</p>
			</AllocationData.Provider>
		</div>
	);
};

export default App;
