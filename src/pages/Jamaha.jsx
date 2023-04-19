import React from "react";
import { CarouselView } from "../Journal/Components/CarouselView";

export const Jamaha = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Jamaha</h2>
      </div>
      <CarouselView text={"150 cc"} />

      <CarouselView text={"200 cc"} />
    </>
  );
};
