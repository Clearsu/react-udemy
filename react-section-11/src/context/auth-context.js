import React from "react";

// create context object
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
