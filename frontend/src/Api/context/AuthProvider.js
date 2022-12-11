import React, { createContext, useEffect, useState, useReducer } from "react";
import API from "../Api";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [info, setInfo] = useState({});
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [firstName ,setFirstName]=useState("")
  const [lastName ,setLastName]=useState("")
  const [phone ,setPhone]=useState("")
  const [listTodo ,setListTodo]=useState([])
  const navigate =useNavigate()

  //create a custom function that will change menucollapse state from false to true and true to false
const changeTitle=(e)=>{
    setTitle(e.target.value)
}
const changeDescription=(e)=>{
    setDescription(e.target.value)
}
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  //authentifaction
  const authentifacte = (data) => {
    API.post("http://localhost:5000/cnx/login", data)
      .then((response) => {
        if (response.data.error ){
            Swal.fire('Invalid email and password')
        }
        else {
            setInfo(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
     
            navigate('/todo')
        }
        
      })
      .catch((err) => console.log(err));
  };

  //register
  const register =(data)=>{
    API.post('http://localhost:5000/cnx/register',data).then((res)=>
    {
        console.log(res.data)
        navigate('/')
    }
    ).catch((err)=>console.log(err))
  }
    //list todo
  const getAllTodo =()=>{
    API.get('http://localhost:5000/todo').then((res)=>
    {
        console.log(res.data)
        setListTodo(res.data)
    }
    ).catch((err)=>console.log(err))
  }
  const addTodo =(data)=>{
    API.post('http://localhost:5000/todo',data).then((res)=>
    {
        console.log(res.data)
        window.location.reload()
        
    }
    ).catch((err)=>console.log(err))
  }
  const deleteTodo =(id)=>{
    API.delete(`http://localhost:5000/todo/${id}`).then((res)=>
    {
        console.log(res.data)
        window.location.reload()
        
    }
    ).catch((err)=>console.log(err))
  }
  const editTodo =(id,data)=>{
    API.put(`http://localhost:5000/todo/${id}`,data).then((res)=>
    {
        console.log(res.data)
        window.location.reload()
        
    }
    ).catch((err)=>console.log(err))
  }
  const editcheckebox=(id,data)=>{
    API.put(`http://localhost:5000/todo/finished/${id}`,data).then((res)=>
    {
        console.log(res.data)
        window.location.reload()
        
    }
    ).catch((err)=>console.log(err))
  }
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const forgetPassword=(data)=>{
    API.post(`http://localhost:5000/cnx/forget`,data).then((res)=>
    {
        console.log(res.data)
     
        
    }
    ).catch((err)=>console.log(err))
  
  }
  return (
    <AuthContext.Provider
      value={{
        authentifacte,
        email,
        changeEmail,forgetPassword,
        password,firstName,lastName,phone,
        changePassword,
        getAllTodo,listTodo,
        title,description,changeTitle,changeDescription,addTodo,deleteTodo,editTodo,editcheckebox,register,changeFirstName,changeLastName,changePhone
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
