import { Statistic } from 'antd';
import React from 'react';

const ChartTop = (props) => {
	let data = [...props.chart];
	console.log(data);
	return data.map((item, i) => {
		return (
			<div className='ant-statistic-wrapper ant-statistic-red mb-10' key={item.id + "_" + i}>
				<Statistic title={item.product} value={item.total_revenue} />
			</div>
		);
	});
};

export default ChartTop;
