import { Pie } from "@ant-design/charts";
import { ReloadOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";
import React from "react";

const ChartTop = () => {
  return (
    <Card
      size="small"
      title="Top 5 Sales"
      extra={<ReloadOutlined />}
      style={{ width: "100%" }}
    >
      <div className="ant-statistic-wrapper ant-statistic-red mb-10">
        <Statistic title="Net Sales" value={112893} />
      </div>
      <div className="ant-statistic-wrapper ant-statistic-green mb-10">
        <Statistic title="Net Sales" value={112893} />
      </div>
      <div className="ant-statistic-wrapper ant-statistic-dark mb-10">
        <Statistic title="Net Sales" value={112893} />
      </div>
      <div className="ant-statistic-wrapper ant-statistic-light-blue mb-10">
        <Statistic title="Net Sales" value={112893} />
      </div>
      <div className="ant-statistic-wrapper ant-statistic-blue">
        <Statistic title="Net Sales" value={112893} />
      </div>
    </Card>
  );
};

export default ChartTop;
