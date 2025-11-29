import { POSTDATA } from "@/app/Utils/Postdata";
import React from "react";
import Postlist from "../components/Postlist";

export default async function singlePost({ params }) {
  const { postId } = await params;
  const userPosts = POSTDATA.filter((p) => p.pid === postId);
  return (
    <div>
      <Postlist posts={userPosts} />
    </div>
  );
}
