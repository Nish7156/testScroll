import React, { useEffect, useState } from "react";

function HorizontalScroll() {
  const [first, setfirst] = useState();
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
      setfirst(draw);
      console.log(draw, "draw");

      // Reverse the drawing when scroll upwards
      svg.style.strokeDashoffset = length - draw;
    });
  }, []);
  return (
    <>
      <div>
        <div className="h-[70rem] w-full border-2 container mx-auto relative">
          <div className="pt-28">
            <svg
              id="chart"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svgPath"
                d="M0,192L68.6,160L137.1,288L205.7,96L274.3,288L342.9,64L411.4,128L480,64L548.6,224L617.1,32L685.7,160L754.3,224L822.9,256L891.4,64L960,160L1028.6,160L1097.1,128L1165.7,192L1234.3,224L1302.9,96L1371.4,96L1440,224L1440,320L1371.4,320L1302.9,320L1234.3,320L1165.7,320L1097.1,320L1028.6,320L960,320L891.4,320L822.9,320L754.3,320L685.7,320L617.1,320L548.6,320L480,320L411.4,320L342.9,320L274.3,320L205.7,320L137.1,320L68.6,320L0,320Z"
                fill="none"
                stroke="#e7008a"
                stroke-width="4px"
              />{" "}
            </svg>
          </div>

          {first >= 426.94592911549597 && (
            <a
              href="#"
              class="block max-w-sm absolute top-[2%] left-[12%] p-6 bg-blue-500 border border-gray-200 rounded-lg shadow"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          )}

          {first >= 1228.5024799065238 && (
            <a
              href="#"
              class="block absolute top-[37%] right-[20%] max-w-sm p-6 bg-green-500 border border-gray-200 rounded-lg shadow "
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default HorizontalScroll;

{
  /* <svg
        viewBox="0 0 238 866"
        height='1222'
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          id="svgPath"
          d="M70.5 0.5C70.5 175.7 127.167 250.833 155.5 266.5L219.5 232.5V336.5L170.5 294L94 355.5L2.5 294L83 221.5V704.5M83 704.5V717L43 859.5L145 864V825.5L219.5 813L236.5 766L198 704.5H155.5V640.5L83 704.5Z"
          stroke="green"
          strokeWidth="3"
        />
      </svg> */
}
