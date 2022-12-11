
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Api/hooks/useAuth";
import { LogoutOutlined} from "@ant-design/icons";
const Logout = () => {

    const logout = () => {
        localStorage.clear();
        window.location.reload()
    }
  return (
    <div>
        <form action='' onClick={logout} >
                <Link to="/"> <LogoutOutlined /> logout</Link>
                            
                </form>
    </div>
  );
};

export default Logout;
