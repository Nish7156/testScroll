import ScrollDrawing from "../components/ScrollDrawing";
import Test from "../components/Test";
import HorizontalScroll from "../components/HorizontalScroll";
import RoundedScroll from "../components/RoundedScroll";
import Train from "../components/Train";
import ScrollWithContent from "../components/ScrollWithContent";
import Test2 from "../components/Test2";
import Test3 from "../components/Test3";
import { useState } from "react";
export default function Home() {
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);

  return (
    <>
      <h1 className="py-5 text-lg font-bold text-center text-white underline bg-primary ">
        Next js + Tailwind
      </h1>
      <div className="p-4">
        <label htmlFor="">Star on Scroll</label>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={(e) => setfirst(!first)}
        />
      </div>
      <div className="p-4">
        <label htmlFor="">Line and content on Scroll</label>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={(e) => setSecond(!second)}
        />
      </div>
      <div className="p-4">
        <label htmlFor="">Round SVG Scroll</label>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={(e) => setThird(!third)}
        />
      </div>
      <div className="p-4">
        <label htmlFor="">HorizontalScroll</label>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={(e) => setForth(!forth)}
        />
      </div>
      {first ? (
        <ScrollDrawing />
      ) : second ? (
        <Test />
      ) : third ? (
        <RoundedScroll />
      ) : forth ? (
        <HorizontalScroll />
      ) : (
        <ScrollWithContent />
      )}
    </>
  );
}
