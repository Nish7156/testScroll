import React, { useState, useEffect } from "react";

function ScrollWithContent() {
  const [first, setfirst] = useState();
  useEffect(() => {
    const svg = document.getElementById("svgPath");
    const svg1 = document.getElementById("svgPath1");
    const redLine = document.getElementById("redLine");
    const circle = document.getElementById("circle");

    const length = svg.getTotalLength();
    const length1 = svg1.getTotalLength();
    const redLineLength = redLine.getTotalLength();
    const circleLength = circle.getTotalLength();

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;
    svg1.style.strokeDasharray = length1;
    redLine.style.strokeDasharray = redLineLength;
    circle.style.strokeDasharray = circleLength;

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;
    svg1.style.strokeDashoffset = length1;
    redLine.style.strokeDashoffset = redLineLength;
    circle.style.strokeDashoffset = circleLength;

    window.addEventListener("scroll", function () {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      const draw = length * scrollpercent * 3;

      const draw1 = length1 * scrollpercent * 3;
      console.log(draw);
      setfirst(draw);
      // Reverse the drawing when scroll upwards

      if (draw >= 0 && draw < 2437) {
        svg.style.strokeDashoffset = length - draw;
        // circle.style.strokeDashoffset = circleLength;
      } else if (draw >= 2437 && draw < 2520) {
        circle.style.strokeDashoffset = circleLength;
      } else if (draw >= 2520 && draw < 2906) {
        circle.style.strokeDashoffset = circleLength - draw;
      } else if (draw >= 2907 && draw < 2922) {
        // circle.style.strokeDashoffset = circleLength - draw;
        redLine.style.strokeDashoffset = redLineLength;
      } else if (draw >= 2923 && draw <= 3578) {
        redLine.style.strokeDashoffset = redLineLength - draw - 2390;
      } else if (draw >= 3578 && draw < 7311) {
        svg1.style.strokeDashoffset = length1 - draw1;
      } else {
        console.log("Return");
      }
    });
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen">
        <div className=" relative px-8  border-2 w-full lg:max-w-[1024px] md:max-w-[800px] m-4 ">
          <svg
            className="md:w-[700px] w-[250px] md:h-[605px] h-[300px]"
            viewBox="0 0 805 605"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="svgPath"
              d="M3 18C45.6227 18 88.4385 22.7792 131 18.5556C168.009 14.8829 203.879 6.77796 241.222 6.11112C279.702 5.42398 318.084 5.83082 356.556 4.44445C410.457 2.50205 465.248 3.747 518.889 9.11112C557.149 12.9371 595.456 12 633.889 12C661.624 12 689.055 10 716.778 10C726.274 10 768.683 5.80792 771 21.4445C775.273 50.284 780.106 79.6593 787 108C792.9 132.254 794.184 157.669 799.444 182C801.762 192.721 802.972 207.301 800 218C798.138 224.703 793.672 229.768 790.556 236C785.869 245.373 777.962 246 767.778 246C715.951 246 665.05 239.342 613.333 238.111C492.821 235.242 369.756 217.054 253 255C237.852 259.923 222.516 262.905 207.222 267.111C202.478 268.416 197.484 270.302 193.333 273C190.147 275.071 189.552 279.114 186.556 281.111C181.037 284.79 169.949 283.76 163.444 286.444C154.041 290.325 145.812 295.399 138.111 302C125.645 312.685 129 341.113 129 355.556C129 376.667 129 397.778 129 418.889C129 441.633 129.304 459.183 138.556 480C149.307 504.19 181.471 506 206.222 506C274.937 506 343.514 487.471 412.556 498.444C433.877 501.833 454.602 502 476.111 502C486.276 502 495.884 498.605 506 498.111C517.474 497.551 529.067 498 540.556 498C556.401 498 573.508 496.113 589 499.556C616.526 505.672 641 522.979 641 552.889C641 569.211 643 586.313 643 602"
              stroke="#849AD5"
              stroke-width="6"
              stroke-linecap="round"
            />
            <path
              id="circle"
              d="M643 602C643 623.376 664.716 628.901 681.111 633C709.173 640.016 753.267 628.72 771.889 604.778C782.005 591.772 782.862 574.183 777.444 559.556C770.918 541.934 760.875 538.24 745 531.556C733.564 526.74 702.74 526.668 699.111 543C697.625 549.687 697 555.367 697 562.444C697 567.376 701.04 586.44 706.111 587.889C713.841 590.097 718.369 592 726.889 592C739.02 592 736.923 590.416 743.444 582.444C745.955 579.376 745.799 571.096 744.889 567C743.222 559.501 736.981 560 731 560"
              stroke="#849AD5"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>

          {first >= 912.07914362237 && (
            <h1
              className={`absolute md:text-[5rem] text-md ${
                first >= 912.07914362237 && first <= 1063.6043998015211
                  ? "text-gray-300"
                  : "text-black"
              } font-bold left-[26%] top-20 `}
            >
              Welcome !
            </h1>
          )}

          {first >= 1746.681712284023 && (
            <p
              className={`absolute md:text-lg text-sm md:left-[22%] left-[14%]  ${
                first >= 1746.681712284023 && first <= 1963.6043998015211
                  ? "text-gray-300"
                  : "text-black"
              } px-10 md:w-1/2 w-full md:top-[20%] top-[12%]`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          )}
          {first >= 3264.974533461792 && (
            <>
              <div className="absolute md:text-lg text-sm md:left-[6%] left-[4%] px-10 md:w-1/2 w-full md:top-[37%] top-[24%]">
                <p
                  className={`p-2 ${
                    first >= 3264.974533461792 && first <= 3464.974533461792
                      ? "text-gray-300"
                      : "text-black"
                  }`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p
                  className={`p-2 ${
                    first >= 3264.974533461792 && first <= 3464.974533461792
                      ? "text-gray-300"
                      : "text-black"
                  }`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </>
          )}

          <svg
            className="w-[200px] md:w-[397px] h-[] md:h-[241]"
            viewBox="0 0 397 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="redLine"
              d="M394.43 8.1155C326.373 8.1155 260.088 19.2058 191.878 19.2058C148.81 19.2058 106.354 21.9783 63.2623 21.9783C55.8357 21.9783 -5.8501 33.308 4.11433 10.8881C8.32608 1.41161 13.5429 2.57038 22.9061 2.57038C32.1108 2.57038 30.5011 12.7275 33.3803 19.2058C36.2895 25.7515 33.9964 36.9733 33.9964 44.1588C33.9964 53.9341 36.769 62.1004 36.769 71.7304C36.769 127.183 33.9964 183.158 33.9964 238.238"
              stroke="#CB2D2D"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>

          <svg
            className="md:w-[599px] w-[300px] h-[900px] md:h-[927px]"
            viewBox="0 0 599 927"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="svgPath1"
              d="M590 3C590 38.966 596 74.6363 596 110.444C596 145.367 591.355 175.964 575.889 208C563.75 233.144 544.764 247.594 519.111 257C493.312 266.46 460.046 261 432.889 261C411.64 261 389.31 268.96 367.889 271C352.582 272.458 337.88 276.632 322.444 277C309.26 277.314 295.29 278.185 282.222 280C257.929 283.374 233.535 287.582 209.111 289.444C177.457 291.859 147.461 302.924 116.667 309.889C85.1433 317.019 59.2329 337.095 36.1111 359C17.2075 376.909 10.9598 397.953 8 423.111C2.90866 466.388 12.2172 511.806 4.44444 554.556C2.00977 567.946 5.24887 580.249 14.8889 589.889C21.208 596.208 25.955 605 35 605C46.6253 605 57.0038 605.613 68 609.889C76.9226 613.359 87.0852 612.89 96.4444 613C120.163 613.279 143.635 617.91 167.333 619C195.078 620.276 222.669 621 250.444 621C266.249 621 282.427 622.103 297.556 616.556C305.065 613.802 309.509 612.41 318.444 613.222C346.487 615.772 374.217 623.225 402.222 626.556C428.787 629.715 455.278 632.189 481.556 637.444C495.966 640.326 511.837 641.453 525.778 645.889C547.009 652.644 567.095 659.723 573 684C586.781 740.653 568.65 799.19 576.444 856.556C576.861 859.621 586.035 897.281 580.222 898.111C569.196 899.686 554.708 894.095 544 892C515.941 886.51 487.844 883.769 460.222 876C419.83 864.64 376.054 857.945 334 857C276.96 855.718 217.949 847.115 161.111 857C144.555 859.879 128.27 860.488 112 864.556C103.834 866.597 91.8143 866.297 85.5556 872.556C79.4277 878.683 76 884.464 76 893C76 899.16 71.113 925.443 76 923"
              stroke="#849AD5"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ScrollWithContent;
