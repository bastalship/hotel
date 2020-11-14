import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { API_URL } from './../../constants';
const { Dragger } = Upload;

const UploadExcel = (props) => {
  const config = {
    name: "import_file",
    multiple: false,
    action: `${API_URL}upload`,
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    beforeUpload: file => {
        if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          message.error(`${file.name} is not a excel file`);
        }
        return file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        props.changeDisabled(false);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Dragger {...config}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Ấn hoặc kéo tập tin vào
      </p>
    </Dragger>
  );
};

export default UploadExcel;
