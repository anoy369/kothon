import { useContext, createContext } from "react";
import { auth } from "../Firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log("user", user);
  console.log("loading", loading);
  const value = { user, loading, error };

  return (
    <AuthContext.Provider value={value}>
      {loading ? "loding..." : children}
    </AuthContext.Provider>
  );
};
