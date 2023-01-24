import React, { useEffect } from "react";

function RoundedScroll() {
  useEffect(() => {
    const svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();

    console.log(length, "length");

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;

    window.addEventListener("scroll", function () {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      const draw = length * scrollpercent;
      //   setfirst(draw);
      console.log(draw, "draw");

      // Reverse the drawing when scroll upwards
      svg.style.strokeDashoffset = length - draw;
    });
  }, []);
  return (
    <>
      <div>
        <svg width="357" height="1000">
          <path
            id="svgPath"
            stroke="#1085c7"
            stroke-width="4px"
            stroke-dasharray="20, 10"
            fill="none"
            d="M171,35 C0,314 400,100 39,44"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default RoundedScroll;
