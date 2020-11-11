import { Pie } from '@ant-design/charts';
import React from 'react';

const ChartPie = (props) => {
	// var data = [
	// 	{
	// 		type: '分类一',
	// 		value: 27,
	// 	},
	// 	{
	// 		type: '分类二',
	// 		value: 25,
	// 	},
	// 	{
	// 		type: '分类三',
	// 		value: 18,
	// 	},
	// 	{
	// 		type: '分类四',
	// 		value: 15,
	// 	},
	// 	{
	// 		type: '分类五',
	// 		value: 10,
	// 	},
	// 	{
	// 		type: '其他',
	// 		value: 5,
	// 	},
	// ];
	const data = props.chart;
	console.log(data);
	const config = {
		appendPadding: 20,
		data: data,
		angleField: 'value',
		colorField: 'label',
		radius: 0.8,
		label: {
			type: 'inner',
			offset: '0',
			content: '{label}',
			style: {
				fill: '#fff',
				fontSize: 12,
				textAlign: 'center',
			},
		},
		interactions: [{ type: 'element-active' }],
	};
	return <Pie {...config} />;
};

export default ChartPie;
