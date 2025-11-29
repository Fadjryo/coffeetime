import React from "react";
import Userlist from "./components/Userlist";
import { USERDATA } from "../Utils/Userdata";
import { POSTDATA } from "../Utils/Postdata";
import Postlist from "../post/components/Postlist";

export default async function userPage({ params }) {
  const { username } = await params;
  const creator = USERDATA.filter((u) => u.username === username);

  if (!creator) {
    return <h1> NO USER FOUND </h1>;
  }

  const userId = creator[0].uid;

  const userPosts = POSTDATA.filter((p) => p.userId === userId);

  return (
    <div>
      <Userlist users={creator} />
      <Postlist posts={userPosts} showUsers={false} linkImage />
    </div>
  );
}
