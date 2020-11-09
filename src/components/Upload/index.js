import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { API_URL } from './../../constants';
const { Dragger } = Upload;

const UploadExcel = () => {
  const props = {
    name: "import_file",
    multiple: false,
    action: `${API_URL}upload`,
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
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};

export default UploadExcel;
