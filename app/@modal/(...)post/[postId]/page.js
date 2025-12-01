import { POSTDATA } from "@/app/Utils/Postdata";
import React from "react";
import Postlist from "@/app/post/components/Postlist";
import { mergePostswithUsers } from "@/app/lib/Merge";
import { USERDATA } from "@/app/Utils/Userdata";
import "../../modal.modules.css";
import Backdrop from "@/app/elements/Backdrop";

export default async function singlePost({ params }) {
  const { postId } = await params;
  const userPosts = POSTDATA.filter((p) => p.pid === postId);

  const userPostswithDetails = mergePostswithUsers(userPosts, USERDATA);

  return (
    <>
      <Backdrop>
        <dialog className="modalContainer" open>
          <Postlist
            posts={userPostswithDetails}
            showUsers={true}
            linkImage={false}
            className="modalBox"
          />
        </dialog>
      </Backdrop>
    </>
  );
}
