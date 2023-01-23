import ScrollDrawing from '../components/ScrollDrawing'
import Test from '../components/Test'
import HorizontalScroll from '../components/HorizontalScroll'
import { useState } from 'react'
export default function Home() {
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false)
  return (
    <>
    <h1 className="py-5 text-lg font-bold text-center text-white underline bg-primary ">
      Next js + Tailwind
    </h1>
   <div className='p-4'>
   <label htmlFor="">Star on Scroll</label>
    <input type="checkbox" name="" id="" onClick={(e)=>setfirst(!first)} />
   </div>
   <div className='p-4'>
   <label htmlFor="">Line with content on Scroll</label>
    <input type="checkbox" name="" id="" onClick={(e)=>setSecond(!second)} />
   </div>
    {first ? <ScrollDrawing/> : second ?  <Test/> : <HorizontalScroll/>}
    </>
  )
}