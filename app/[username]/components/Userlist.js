import React from "react";
import Useritem from "./Useritem";

export default function Userlist(props) {
  if (props.users.length === 0) {
    return <h1> NO USER FOUND </h1>;
  }
  return (
    <ul>
      {props.users.map((u) => (
        <Useritem
          key={u.uid}
          uid={u.uid}
          username={u.username}
          avatar={u.avatar}
          bio={u.bio}
        />
      ))}
    </ul>
  );
}
