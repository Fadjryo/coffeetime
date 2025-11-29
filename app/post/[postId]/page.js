import { POSTDATA } from "@/app/Utils/Postdata";
import React from "react";
import Postlist from "../components/Postlist";
import { mergePostswithUsers } from "@/app/lib/Merge";
import { USERDATA } from "@/app/Utils/Userdata";

export default async function singlePost({ params }) {
  const { postId } = await params;
  const userPosts = POSTDATA.filter((p) => p.pid === postId);

  const userPostswithDetails = mergePostswithUsers(userPosts, USERDATA);

  return (
    <div>
      <Postlist
        posts={userPostswithDetails}
        showUsers={true}
        linkImage={false}
      />
    </div>
  );
}
