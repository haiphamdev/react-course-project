import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  return (
    <AuthProvider.Provider value={value} {...props}></AuthProvider.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { useAuth, AuthProvider };
