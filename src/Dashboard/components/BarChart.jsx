import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
ChartJs.register(
	Tooltip, Title, ArcElement, Legend
);

function BarChart() {
	const data = {
		datasets: [{
			data: [10, 20, 30],
			backgroundColor : [
				'orange',
				'yellow',
				'green'
			]
		},
	],

		// These labels appear in the legend and in the tooltips when hovering different arcs
		labels: [
			'Orange',
			'Yellow',
			'Green'
		],
	
	};
	return (
		<>
			<Pie data={data} />
		</>
	)
}

export default BarChart;
