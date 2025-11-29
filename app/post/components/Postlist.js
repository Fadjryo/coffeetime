import React from "react";
import Postitem from "./Postitem";

export default function Postlist(props) {
  if (props.posts.length === 0) {
    return <h1> NO POST FOUND </h1>;
  }
  return (
    <ul>
      {props.posts.map((p) => (
        <Postitem
          key={p.pid}
          pid={p.pid}
          content={p.content}
          image={p.image}
          imageAlt={p.imageAlt}
          username={p.username}
          userAvatar={p.userAvatar}
        />
      ))}
    </ul>
  );
}
