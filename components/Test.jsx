import React, { useEffect, useState } from "react";

function Test() {
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
    <div className="container relative w-1/2 mx-auto my-20 border-2">
      <svg width="357" height="3130">
        <path
          id="svgPath"
          stroke="#1085c7"
          stroke-width="4px"
          stroke-dasharray="20, 10"
          fill="none"
          d="M268,106C293.6990093311958,156.98197064989517,319.39801866239156,207.96394129979035,282,250C244.6019813376084,292.03605870020965,144.10693468162947,325.1262054507337,89,388C33.89306531837054,450.8737945492663,24.174242611090563,543.5312368972745,18,666C11.82575738890944,788.4687631027255,9.196094874008299,940.7488469601676,13,1056C16.8039051259917,1171.2511530398324,27.04137789287624,1249.4733752620546,71,1351C114.95862210712376,1452.5266247379454,192.6383935544868,1577.3576519916141,242,1659C291.3616064455132,1740.6423480083859,312.40504788917667,1779.0960167714886,268,1879C223.59495211082336,1978.9039832285114,113.74141488880667,2140.258280922432,88,2337C62.25858511119333,2533.741719077568,120.62929255559666,2765.8708595387843,179,2998"
        ></path>
      </svg>

      {first >= 153.49704057468497 && (
        <a
          href="#"
          class="block max-w-sm absolute top-[8%] left-[12%] p-6 bg-blue-500 border border-gray-200 rounded-lg shadow"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      )}

      {first >= 618.0837044485991 && (
        <a
          href="#"
          class="block absolute top-[18%] max-w-sm p-6 bg-green-500 border border-gray-200 rounded-lg shadow "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      )}
      {first >= 1374.3467168597688 && (
        <a
          href="#"
          class="block absolute top-[40%] left-[10%] max-w-sm p-6 bg-yellow-400 border border-gray-200 rounded-lg shadow "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      )}
    </div>
  );
}

export default Test;
