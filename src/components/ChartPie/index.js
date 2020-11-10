import { Pie } from "@ant-design/charts";
import { ReloadOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const ChartPie = () => {
    var data = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其他',
          value: 5,
        },
      ];
  const config = {
    appendPadding: 20,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '0',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
        fontSize: 12,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return (
    <Card
      size="small"
      title="Sales By Order Type"
      extra={<ReloadOutlined />}
      style={{ width: "100%" }}
    >
      <Pie {...config} />
    </Card>
  );
};

export default ChartPie;
