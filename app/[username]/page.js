import React from "react";
import Userlist from "./components/Userlist";
import { USERDATA } from "../Utils/Userdata";

export default async function userPage({ params }) {
  const { username } = await params;
  const creator = USERDATA.filter((u) => u.username === username);
  return (
    <div>
      <Userlist users={creator} />
    </div>
  );
}
