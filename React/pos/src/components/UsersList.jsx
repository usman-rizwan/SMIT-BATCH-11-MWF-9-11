import { Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsersFromDB();
  }, []);

  const getUsersFromDB = async () => {
    const ref = collection(db, "users");
    const userData = await getDocs(ref);
    if (!userData.empty) {
      const allUsers = [];
      userData.forEach((userInfo) => {
        allUsers.push({ ...userInfo.data(), id: userInfo.id });
      });
      setUsers([...allUsers]);
    }
  };
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Uid",
      dataIndex: "uid",
      key: "uid",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
  ];
  return <Table dataSource={users} columns={columns} />;
}

export default UsersList;
