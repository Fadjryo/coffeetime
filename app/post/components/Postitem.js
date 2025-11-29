import React from "react";
import Image from "next/image";

export default function Postitem(props) {
  return (
    <li>
      <div>
        {props.username}
        {props.userAvatar}
        <div>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={400}
            height={900}
          />
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
