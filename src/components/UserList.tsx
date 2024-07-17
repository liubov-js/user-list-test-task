import { FC } from "react";
import { IUser } from "../types/types";
import UserCard from "./UserCard";

interface UserListProps {
  users: IUser[],
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="userList">
      {users.map(user => 
        <UserCard key={user.id} user={user} />
      )}
    </div>
  );
}

export default UserList;
