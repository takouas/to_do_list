import React, { useState } from "react";
import { Modal, Button, Select, Input, Form, Upload, Pagination } from "antd";
import useAuth from "../../Api/hooks/useAuth";
const { TextArea } = Input;
const AddTask = () => {
  const [visible, setVisible] = useState(false);
  const { title, description, changeTitle, changeDescription, addTodo } =
    useAuth();
  //   modal
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button className="" onClick={showModal} style={{}}>
        add
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
          <Input id="title" required value={title} onChange={changeTitle} />
          <h3>description</h3>

          <TextArea
            maxlength="300"
            id="description"
            required
            value={description}
            onChange={changeDescription}
          />
          <Button
            onClick={() =>
              addTodo({
                title: title,
                description: description,
                finished: false,
              })
            }
          >
            submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddTask;
