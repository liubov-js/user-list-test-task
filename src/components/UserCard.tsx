import { FC } from "react";
import { IUser } from "../types/types";

interface UserCardProps {
  user: IUser,
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="userCard">
      <strong>{user.username}</strong>
      <div>email: {user.email}</div>
      <div>phone: {user.phone}</div>
    </div>
  );
}

export default UserCard;
