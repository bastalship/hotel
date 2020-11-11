import { Column } from '@ant-design/charts';
import React from 'react';

const ChartColumn = (props) => {
	const data = [...props.chart.data];
	const config = {
		data,
		xField: 'x',
		yField: 'y',
		label: {
			position: 'middle',
			style: {
				fill: '#FFFFFF',
				opacity: 0.6,
			},
		},
		meta: {
			x: {
				alias: 'Date',
			},
			y: {
				alias: 'Profit',
			},
		},
	};
	return <Column {...config} />;
};

export default ChartColumn;
