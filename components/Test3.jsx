import React,{useState,useEffect} from "react";

function Test3() {
    const [first, setfirst] = useState();
  useEffect(() => {
    const svg = document.getElementById("svgPath1");
    
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

      const draw = length * scrollpercent *3;
      setfirst(draw);
      console.log(draw, "draw");

      // Reverse the drawing when scroll upwards
      svg.style.strokeDashoffset = length - draw;
    });
    
  }, []);
  return (
    <>
    <div>
         {/* <svg
        width="599"
        height="927"
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
      </svg> */}
      <svg width="805" height="1528" viewBox="0 0 805 1528" fill="none" xmlns="http://www.w3.org/2000/svg">
{/* <path id="" d="M3 18C45.6227 18 88.4385 22.7792 131 18.5556C168.009 14.8829 203.879 6.77796 241.222 6.11112C279.702 5.42398 318.084 5.83082 356.556 4.44445C410.457 2.50205 465.248 3.747 518.889 9.11112C557.149 12.9371 595.456 12 633.889 12C661.624 12 689.055 10 716.778 10C726.274 10 768.683 5.80792 771 21.4445C775.273 50.284 780.106 79.6593 787 108C792.9 132.254 794.184 157.669 799.444 182C801.762 192.721 802.972 207.301 800 218C798.138 224.703 793.672 229.768 790.556 236C785.869 245.373 777.962 246 767.778 246C715.951 246 665.05 239.342 613.333 238.111C492.821 235.242 369.756 217.054 253 255C237.852 259.923 222.516 262.905 207.222 267.111C202.478 268.416 197.484 270.302 193.333 273C190.147 275.071 189.552 279.114 186.556 281.111C181.037 284.79 169.949 283.76 163.444 286.444C154.041 290.325 145.812 295.399 138.111 302C125.645 312.685 129 341.113 129 355.556C129 376.667 129 397.778 129 418.889C129 441.633 129.304 459.183 138.556 480C149.307 504.19 181.471 506 206.222 506C274.937 506 343.514 487.471 412.556 498.444C433.877 501.833 454.602 502 476.111 502C486.276 502 495.884 498.605 506 498.111C517.474 497.551 529.067 498 540.556 498C556.401 498 573.508 496.113 589 499.556C616.526 505.672 641 522.979 641 552.889C641 569.211 643 586.313 643 602" stroke="#849AD5" stroke-width="6" stroke-linecap="round"/> */}
<path id="svgPath1" d="M643 602C643 623.376 664.716 628.901 681.111 633C709.173 640.016 753.267 628.72 771.889 604.778C782.005 591.772 782.862 574.183 777.444 559.556C770.918 541.934 760.875 538.24 745 531.556C733.564 526.74 702.74 526.668 699.111 543C697.625 549.687 697 555.367 697 562.444C697 567.376 701.04 586.44 706.111 587.889C713.841 590.097 718.369 592 726.889 592C739.02 592 736.923 590.416 743.444 582.444C745.955 579.376 745.799 571.096 744.889 567C743.222 559.501 736.981 560 731 560" stroke="#849AD5" stroke-width="6" stroke-linecap="round"/>
{/* <path d="M773 604C773 639.966 779 675.636 779 711.444C779 746.367 774.355 776.964 758.889 809C746.75 834.144 727.764 848.594 702.111 858C676.312 867.46 643.046 862 615.889 862C594.64 862 572.31 869.96 550.889 872C535.582 873.458 520.88 877.632 505.444 878C492.26 878.314 478.29 879.185 465.222 881C440.929 884.374 416.535 888.582 392.111 890.444C360.457 892.859 330.461 903.924 299.667 910.889C268.143 918.019 242.233 938.095 219.111 960C200.207 977.909 193.96 998.953 191 1024.11C185.909 1067.39 195.217 1112.81 187.444 1155.56C185.01 1168.95 188.249 1181.25 197.889 1190.89C204.208 1197.21 208.955 1206 218 1206C229.625 1206 240.004 1206.61 251 1210.89C259.923 1214.36 270.085 1213.89 279.444 1214C303.163 1214.28 326.635 1218.91 350.333 1220C378.078 1221.28 405.669 1222 433.444 1222C449.249 1222 465.427 1223.1 480.556 1217.56C488.065 1214.8 492.509 1213.41 501.444 1214.22C529.487 1216.77 557.217 1224.22 585.222 1227.56C611.787 1230.72 638.278 1233.19 664.556 1238.44C678.966 1241.33 694.837 1242.45 708.778 1246.89C730.009 1253.64 750.095 1260.72 756 1285C769.781 1341.65 751.65 1400.19 759.444 1457.56C759.861 1460.62 769.035 1498.28 763.222 1499.11C752.196 1500.69 737.708 1495.1 727 1493C698.941 1487.51 670.844 1484.77 643.222 1477C602.83 1465.64 559.054 1458.95 517 1458C459.96 1456.72 400.949 1448.12 344.111 1458C327.555 1460.88 311.27 1461.49 295 1465.56C286.834 1467.6 274.814 1467.3 268.556 1473.56C262.428 1479.68 259 1485.46 259 1494C259 1500.16 254.113 1526.44 259 1524" stroke="#849AD5" stroke-width="6" stroke-linecap="round"/> */}
</svg>
    </div>
      </>
  );
}

export default Test3;