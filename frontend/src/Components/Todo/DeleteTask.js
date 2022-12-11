import React, { useState } from 'react'
import {  DeleteOutlined } from "@ant-design/icons";
import { Modal, Button, Select, Input, Form, Upload } from "antd";
import useAuth from '../../Api/hooks/useAuth';
const DeleteTask = (props) => {
    const {id}=props
    const [visible,setVisible]=useState(false)
    const {deleteTodo}=useAuth()
    const  showModal = () => {
        setVisible(true)
      };
     const  handleCancel = () => {
        setVisible( false );
      };
  return (
    <div>
    <Button className="" onClick={showModal} style={{}}>
    <DeleteOutlined />
    </Button>
    <Modal
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      style={{
        fontSize: 15,
      }}
    >
      <div >
        Are you sure delete this task ?
        <br /> <br /> 
        <div className="section-modal-container-button">

          <Button className="section-modal-container-button-delete-confirm" onClick={()=>deleteTodo(id)}>
            Ok
          </Button>
        </div>
        <br />
      </div>
    </Modal>
  </div>
  )
}

export default DeleteTask