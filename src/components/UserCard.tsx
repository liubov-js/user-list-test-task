import { FC } from "react";
import { IUser } from "../types/types";

interface UserCardProps {
  user: IUser,
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <div>{user.username}</div>
      <div>email: {user.email}</div>
      <div>phone: {user.phone}</div>
    </div>
  );
}

export default UserCard;
