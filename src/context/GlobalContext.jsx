import { createContext, useState } from "react";

export const contextCommers = createContext(null);

const GlobalContext = ({ children }) => {
  const [token, setToken] = useState(false);
  return (
    <contextCommers.Provider value={{ token, setToken }}>
      {children}
    </contextCommers.Provider>
  );
};
export default GlobalContext;
