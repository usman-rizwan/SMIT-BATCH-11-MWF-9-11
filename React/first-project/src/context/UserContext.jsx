import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user=>", user);
        setUser({
          isLogin: true,
          userInfo: {
            email: user.email,
            photoUrl: user.photoURL,
            name: user.displayName,
          },
        });
        console.log("User is logged In");
      } else {
        setUser({
          isLogin: false,
          userInfo: {},
        });
        console.log("User is not logged In");
      }
      setLoading(false);
    });

    return subscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? "Loading........." : children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
