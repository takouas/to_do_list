import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Select,
  Input,
  Form,
  Upload,
  Pagination,
  Checkbox,
} from "antd";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import AddTask from "./AddTask";
import "./todolist.css";
import useAuth from "../../Api/hooks/useAuth";
import Logout from "../Logout/Logout";

const Todo = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(10);
  const [checked, setCheked] = useState(false);

  const { getAllTodo, listTodo, editcheckebox } = useAuth();
  const onChange = (e, id) => {
    console.log(id);
    setCheked(e.target.checked);
    editcheckebox(id, { finished: e.target.checked });
  };
  const paginate = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
    setPage(page);
    setPagesize(pageSize);
  };
  useEffect(() => {
    getAllTodo();
  }, []);
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-around',marginTop:'50px'}}>
       
        <AddTask />
        <Logout />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>status</th>
              <th>Task</th>
              <th>Date creaction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listTodo &&
              listTodo
            
                .map((el) => (
                  <tr>
                    {console.log(el)}
                    <td data-column="status">
                    
                      <Checkbox
                        checked={el.finished}
                        onChange={(e) => onChange(e, el._id)}
                      ></Checkbox>
                    </td>
                    <td
                      data-column="task"
                      className={el.finished ? "taskbaree" : "task"}
                    >
                      {el.title} <br/>
                      {el.description}
                    </td>
                    <td data-column="date">{(el.createdAt).replace('T', ' ').replace('Z', ' ').slice(0, 16)}</td>
                    <td data-column="Action">
                      <EditTask
                        id={el._id}
                        titl={el.title}
                        desc={el.description}
                      />
                      <DeleteTask id={el._id} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <center>
          <Pagination
            defaultCurrent={1}
            pageSize={10}
            showSizeChanger={false}
            total={listTodo.length}
            onChange={paginate}
          />
        </center>
      </div>
    </div>
  );
};

export default Todo;
