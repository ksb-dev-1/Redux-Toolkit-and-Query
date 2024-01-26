"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";

// store
import { RootState, fetchUsers, addUser, removeUser } from "@/store";

// hooks
import { useThunk } from "@/hooks/useThunk";

// components
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
  const [doFetchUsers, isFetchingUsers, isFetchingUsersError] =
    useThunk(fetchUsers);
  const [doAdduser, isAddingUser, isAddingUserError] = useThunk(addUser);

  const { data } = useSelector((state: RootState) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doAdduser();
  };

  let content;

  if (isFetchingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (isFetchingUsersError) {
    content = <div>Error data fetching!</div>;
  } else {
    content = data.map((user) => <UsersListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isAddingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {isAddingUserError && <span>Error adding user!</span>}
      </div>
      {content}
    </div>
  );
}
