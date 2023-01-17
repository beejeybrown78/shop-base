import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../../features/slices/sliderSlice"; 
import { useSelector, useDispatch } from "react-redux";
import {sliderData} from "../../assets/data/dummyData"
const Slider =()=>{

    const slideIndex = useSelector((state)=> state.slider.value)
    const dispatch = useDispatch()
    return (<div className="position-relative  ">
        <div>
            {sliderData.map((item ) =>{
            return (<div key={item.id} className={
                parseInt(item.id)===slideIndex 
            ? "opacity-100 duration-700 ease-in-out scale-100"
            :"opacity-0 duration-700 ease-in-out scale-95" }>
                <div>
                    {parseInt(item.id)===slideIndex &&( <img className="h-[850px] w-full" src={item.img} alt='shoes'></img>)}
                    
                </div>
                <div className=" position-absolute top-10 mx-auto inset-x-1/4 ">
                    <p className="text-light text-uppercase  col-lg-12  h2 text-align-center  font-bold">
                        { parseInt(item.id)===slideIndex && item.text}
                        </p>
                </div>
            </div>)
        })}

        </div>
        <div className="d-flex position-absolute bottom-12 left-[42%]">
            {sliderData.map(( dot,index)=>{
                return <div className="mr-4"  key={dot.id}>
                    <div className={index=== slideIndex? 'bg-secondary rounded-circle p-4 cursor-pointer' : "bg-white rounded-full p-4 cursor-pointer"}   onClick={()=>dispatch(dotSlide(index))}>
                      
                    </div>
                </div>;
            })}

        </div>
        <div>
      <button className="position-absolute  top-[50%] right-4 bg-light rounded-circle p-2 " onClick={(()=> dispatch(nextSlide(slideIndex + 1)))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
      <button className="absolute  top-[50%] left-4 bg-light rounded-circle p-2 " onClick={(()=> dispatch(prevSlide(slideIndex - 1)))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</button>
      </div>
    </div>)

}

export default Slider