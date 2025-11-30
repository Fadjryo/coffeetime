"use client";
import React, { useReducer } from "react";
import Link from "next/link";

const buttonReducer = (action, state) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        isActive: !state.isActive,
      };
    }
    default:
      return state;
  }
};

export default function Button(props) {
  const [buttonState, dispatch] = useReducer(buttonReducer, {
    isActive: false,
  });

  const buttonClass = buttonState.isActive ? props.active : props.display;

  function clickHandler() {
    dispatch({ type: "CHANGE" });
  }

  if (props.href) {
    return (
      <Link href={props.href} className={props.className || buttonClass}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={props.className || buttonClass}
      id={props.id}
      onClick={props.onClick || clickHandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
