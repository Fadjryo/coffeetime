import React from "react";
import Image from "next/image";

export default function Useritem(props) {
  return (
    <li>
      <div>
        <Image src={props.avatar} alt={props.username} width={90} height={90} />
        <div>
          <h3>{props.username}</h3>
        </div>
        <div>
          <p>{props.bio}</p>
        </div>
      </div>
    </li>
  );
}
