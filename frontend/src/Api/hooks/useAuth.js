import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () =>  useContext(AuthContext);


export default useAuth;