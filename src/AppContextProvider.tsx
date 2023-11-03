import React, {  createContext, useState } from "react";

interface ContextUser {
  setIsAuth: (isAuth: boolean) => void;
  isAuth: boolean;
  user: {
    email: string;
    token: string;
  };
  setUser: (user: any) => void;
};

//create Context
export const AppContext = createContext<ContextUser>({} as ContextUser);

//provide Context
const AppContextProvider = (props: any) => {
  const {children} = props;
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({
    email: '',
    token: ''
  });

  return (
    <AppContext.Provider
      value={{
        setIsAuth,
        isAuth,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;