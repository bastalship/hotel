import { Col, DatePicker, Row, Select } from 'antd';
import moment from 'moment';
import React from 'react';
const { Option } = Select;

const FormFilter = (props) => {
	const data = [...props.room];
	console.log(data);
	return (
		<Row gutter={[36, 24]}>
			<Col xs={24} sm={12} md={8}>
				<Select
					defaultValue={data[0].id}
					style={{ width: '100%' }}
					onChange={props.handleChange}>
					{data.map((item, i) => {
						return (
							<Option key={item.id + '_' + i} value={item.room_code}>
								{item.room_code}
							</Option>
						);
					})}
				</Select>
			</Col>
			<Col xs={24} sm={12} md={8}>
				<DatePicker
					defaultValue={moment()}
					onChange={props.onChangeDate}
					style={{ width: '100%' }}
				/>
			</Col>
		</Row>
	);
};

export default FormFilter;
