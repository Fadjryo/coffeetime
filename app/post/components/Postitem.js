import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div>WOULD BE ACTIONS</div>
        <div>
          <p>{props.content}</p>
        </div>
        <div>WOULD BE COMMENTS INPUT</div>
      </div>
    </li>
  );
}
