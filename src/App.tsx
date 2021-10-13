import React from 'react';
import Legend from './components/Legend';
import Table from './components/Table';
import Allocations from './data/allocation.json';
import './globals.scss';
import './styles/theme.scss';

/* Context Object (AllocationData) */
export const AllocationData = React.createContext<null | any>(null);

const App = () => {
	/* eslint-disable-next-line */
	console.log('data-visualization-zr, hello dev ;)');

	return (
		<div className="App">
			<header className="App-header">
				<h1>data-visualization-zr</h1>
			</header>
			{/* For this demo all Components will have Access to all Data */}
			<AllocationData.Provider value={Allocations}>
				<Table />
			</AllocationData.Provider>
			<Legend />
		</div>
	);
};

export default App;
