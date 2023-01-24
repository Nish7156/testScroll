import React,{useEffect} from 'react'

function Train() {
  useEffect(() => {
    var current = $(window).scrollTop();
    var total = $(window).height() - current;
    var ele = $(".train");
    var currPosition = ele.position().left + 360;
    var trackLength = 300;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    console.log({total:total,current:current});
    console.log(current/total * 100);
    var newPosition = trackLength * (current/total)
    ele.css({left:currPosition+newPosition+'px'});
});
  }, [])
  
  return (
    <div className='mt-24 border-2 py-28 '>
         <div id="trainMotion" >
          <img src="http://i.imgur.com/uKxkshD.png" alt="Train" class="train"/>
        </div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>
        <div className='h-[10rem]'>sehsezhsehesh</div>

        <div className='h-[10rem]'>sehsezhsehesh</div>
         <div className='h-[10rem]'>sehsezhsehesh</div>
    </div>
  )
}

export default Train