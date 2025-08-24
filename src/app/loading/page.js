import { FadeLoader } from "react-spinners";
import React from "react";

export default function Loading() {
  return (
    <div  className="block mx-auto ">
      < FadeLoader color="blue" />
    </div>
  );
}
