import React from "react";
import { FaHeart, FaSnapchat } from "react-icons/fa";
import Button from "@/app/elements/Button";

export default function Postaction(props) {
  return (
    <div>
      <Button
        id="likes"
        active="text-red-600 font-semibold"
        display="text-gray-500"
        children={<FaHeart />}
      />
    </div>
  );
}
