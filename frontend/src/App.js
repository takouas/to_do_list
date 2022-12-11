import Login from "./Components/Login/Login";
import {  Route, Routes } from "react-router-dom";
import RequireAuth from "./Routes/Layout";
import Layout from "./Routes/Layout";
import { useEffect } from "react";
import Todo from "./Components/Todo/Todo";
import EntryPage from "./Components/EntryPage";

function App() {
  useEffect(() => {
  localStorage.getItem("user");
  }, []);
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route exact path="/" element={<EntryPage />} />
   

      {/* we want to protect these routes */}
      <Route element={<RequireAuth  allowed={[`${JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).data}`]} />}>
        <Route path="/todo" element={<Todo />}/>
      </Route>

   
      {/* catch all */}
    </Route>
  </Routes>
  );
}

export default App;
