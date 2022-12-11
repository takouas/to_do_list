import React, { useState } from "react";
import { Modal, Button, Select, Input, Form, Upload, Pagination } from "antd";
import {  EditOutlined } from "@ant-design/icons";
import useAuth from "../../Api/hooks/useAuth";
const { TextArea } = Input;
const EditTask = (props) => {
  const { id, titl, desc } = props;
  const [visible, setVisible] = useState(false);
  const { title, description, changeDescription, changeTitle, editTodo } =
    useAuth();
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button className="" onClick={showModal} style={{}}>
      <EditOutlined />
      </Button>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={false}
        style={{
          fontSize: 15,
        }}
      >
        <div>
        <h3>title</h3>
          <Input
            id="title"
            required
            defaultValue={titl}
            onChange={changeTitle}
          />
          <h3>description</h3>
          <TextArea
            maxlength="300"
            id="description"
            required
            defaultValue={desc}

            onChange={changeDescription}
          />
          <Button
            onClick={() =>
              editTodo(id, { title: title===''?titl: title, description: description===''? desc :description })
            }
          >
            submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditTask;
