"use client";

// react-icons
import { GoTrash } from "react-icons/go";

// store
import { removeUser } from "@/store";

// hooks
import { useThunk } from "@/hooks/useThunk";

// components
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export default function UsersListItem({ user }: { user: User }) {
  const [doRemoveUser, isRemovingUser, isRemovingUserError] =
    useThunk(removeUser);

  const handleUserRemove = () => {
    doRemoveUser(user);
  };

  let header = (
    <>
      <Button
        className="mr-4"
        loading={isRemovingUser}
        onClick={handleUserRemove}
      >
        <GoTrash />
      </Button>
      {isRemovingUserError && "Error removing user!"}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
