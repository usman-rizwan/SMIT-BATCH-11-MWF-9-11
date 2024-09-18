import React, { useState } from "react";
import { Button, Drawer } from "antd";
import AddUserDrawer from "../../components/AddUserDrawer";
import UsersList from "../../components/UsersList";

function Users() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1>All Users</h1>
        <Button type="primary" onClick={showDrawer}>
          Add User
        </Button>
      </div>

      <AddUserDrawer onClose={onClose} open={open} />

      <UsersList />
    </div>
  );
}

export default Users;
