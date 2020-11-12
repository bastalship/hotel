import { Row, Col, Result, Button } from "antd";
import { Link } from "react-router-dom";

const Page404 = () => (
  <Row gutter={[36, 24]}>
    <Col xs={24}>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang vừa truy cập không tồn tại."
        extra={<Button type="primary"><Link to="/">Về trang chủ</Link></Button>}
      />
    </Col>
  </Row>
);

export default Page404;
