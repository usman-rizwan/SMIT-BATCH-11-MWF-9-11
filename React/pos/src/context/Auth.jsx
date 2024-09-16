import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { Spin } from "antd";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ isLogin: false });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const userInfo = (await getDoc(docRef)).data();
        console.log("userInfo=>", userInfo);
        setUser({
          isLogin: true,
          ...userInfo,
        });
        setLoader(false);
      } else {
        setUser({ isLogin: false });
        setLoader(false);
      }
    });
    return subscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loader ? (
        <div
          className="flex h-screen
      justify-center items-center"
        >
          <Spin />{" "}
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
