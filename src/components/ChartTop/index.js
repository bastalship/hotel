import React from 'react';
import NumberFormat from 'react-number-format';
import { createFromIconfontCN } from '@ant-design/icons';

const ChartTop = (props) => {
	let data = [...props.chart];
	const IconFont = createFromIconfontCN({
		scriptUrl: '//at.alicdn.com/t/font_1123336_dgyx8s18lt4.js',
	});

	return data.map((item, i) => {
		return (
			<div
				className='ant-statistic-wrapper mb-10'
				key={item.id + '_' + i}
				style={{ backgroundColor: item.color }}>
				<div className='ant-statistic'>
					<div className='ant-statistic-title'>
						{i + 1 + ' ' + item.product}
					</div>
					<div className='ant-statistic-content'>
						<span className='ant-statistic-content-value'>
							<span className='ant-statistic-content-count-int'>
								<IconFont type='icon-forkandknife' />
								<NumberFormat
									value={item.total_sales}
									displayType={'text'}
									thousandSeparator={true}
								/>{' '}
							</span>
							<span className='ant-statistic-content-value-int'>
								<NumberFormat
									value={item.total_revenue}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
								/>
							</span>
						</span>
					</div>
				</div>
			</div>
		);
	});
};

export default ChartTop;
