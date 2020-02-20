import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';


const Slider = () => {
  const [datas, setDatas] = useState(null)
  const [arrowVisibility, updateDatas] = useState({
    leftTwo: "visible",
    rightTwo: "visible",
    leftOne: "visible",
    rightOne: "visible",
    leftZero: "visible",
    rightZero: "visible"
  })

 
  useEffect(() => {
    if (datas === null) {

      axios.get('sliderDatas.json').then(res => {
        console.log(res);
        setDatas(res.data)
      })
    }
  })

  return (
    <div class="carousel relative container mx-auto" style={{ maxWidth: "1600px" }}>
      <div class="carousel-inner relative overflow-hidden w-full">

        {datas && datas.map((el, id) => {
          let prev = id
          if (id === 0) {
            prev = 2
          } else {
            prev--
          }
          let next = id
          if (id === 2) {
            next = 0
          } else {
            next++
          }
          return (<div>
            <input class="carousel-open" type="radio" id={"carousel-" + id} name="carousel" aria-hidden="true" hidden="true" checked="checked" />
            <div class="carousel-item absolute opacity-0" style={{ height: "50vh" }}>
              <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')" }}>

                <div class="container mx-auto">
                  <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p class="text-black text-2xl my-4">{el.description}</p>
                    <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                  </div>
                </div>

              </div>
            </div>
            <label for={"carousel-" + prev}  class={"prev hidden control-"+id+" w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer  text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"}>‹</label>
            <label for={"carousel-" + next}  class={"next hidden control-"+id+" w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer  text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"}>›</label></div>)
        })}




      </div>
    </div>

  );
}

export default Slider;