import { createContext, useContext } from "react";

const useLoginInfo = createContext({
  loggedInUSer: "Default user",
});

export default useLoginInfo;
