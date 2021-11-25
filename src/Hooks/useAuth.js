import { useContext } from "react";
import { NewContext } from "../Context/AuthProvider";

const useAuth = () => {
  return useContext(NewContext);
};

export default useAuth;
