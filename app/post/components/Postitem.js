import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/elements/Button";
import {
  FaRegPaperPlane,
  FaHeart,
  FaRegComment,
  FaBookmark,
} from "react-icons/fa";

export default function Postitem(props) {
  const mainContent = (
    <Image src={props.image} alt={props.imageAlt} width={400} height={900} />
  );

  return (
    <li>
      <div>
        {props.showUsers && (
          <Link href={`/${props.username}`}>
            <Image
              src={props.userAvatar}
              alt={props.username}
              width={50}
              height={50}
            />
            {props.username}
          </Link>
        )}
        <div>
          {props.linkImage ? (
            <Link href={`/post/${props.pid}`}>{mainContent}</Link>
          ) : (
            mainContent
          )}
        </div>
        <div className="flex">
          <Button
            id="likes"
            active="text-red-600 font-semibold"
            display="text-gray-500"
            children={<FaHeart />}
          />
          <Button
            id="share"
            href={`/post/${props.pid}`}
            active="text-red-600 font-semibold"
            display="text-gray-500"
            children={<FaRegComment />}
          />
          <Button
            id="comments"
            href={`/post/${props.pid}`}
            active="text-red-600 font-semibold"
            display="text-gray-500"
            children={<FaRegPaperPlane />}
          />
          <Button
            id="bookmarks"
            active="text-yellow-600 font-semibold"
            display="text-gray-500"
            children={<FaBookmark />}
          />
        </div>
        <div>
          <p>{props.content}</p>
        </div>
        <div>WOULD BE COMMENTS INPUT</div>
      </div>
    </li>
  );
}
