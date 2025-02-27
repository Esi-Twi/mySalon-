import { assets, reviewInfo } from "../assets/assets"

 function Testimonials() {
    function slideLeft() {
      const slider = document.getElementById('slider')
      if(window.innerWidth <=490) {
        slider.scrollLeft += -262
      } else {
        slider.scrollLeft += -300
      }
    }

    function slideRight() {
      const slider = document.getElementById('slider')
      if(window.innerWidth <= 490) {
        slider.scrollLeft += 262
      } else {
        slider.scrollLeft += 300
      }
    }

    return(
        <section id='testimonials' className="h-[110vh] flex items-center justify-center flex-col">
            <h1 className="text-3xl micro:text-4xl">Our <span className="text-green-600 underline">Testimonials</span></h1>
            <p className="text-gray-600 text-center text-sm micro:text-base mt-1 mb-8">Check out reviews from some of our clients.</p>

            <div className="flex mt-[2rem] mb-4 gap-2 justify-between w-[75vw]">
                <img onClick={slideLeft} className="w-5 p-1 bg-gray-300 cursor-pointer" src={assets.arrow}/>
                <img onClick={slideRight} className="w-5 p-1 bg-gray-300 cursor-pointer rotate-180" src={assets.arrow}/>
            </div>

            <div className="w-[85vw] mini:w-[75vw]">
                <div id='slider' className="flex gap-2 petite:gap-3 gallery overflow-x-scroll scroll scroll-smooth">
                    {reviewInfo.map((review, index) => {
                        return <div key={index} className="flex-shrink-0 flex gap-2 flex-col rounded border-[1px] border-black w-[16rem] petite:w-[19rem] h-[26rem] p-3">
                            <div key={index} className="flex justify-between items-center">
                                <p>{review.name}</p>
                                <p className="text-green-800 text-[13px] petite:text-base">{review.date}</p>
                            </div>
                          
                            <p className="text-sm petite:text-base">{review.review}</p>
                             <img className="w-screen h-[16rem]" src={review.img}/>
                        </div>
                    })}
                </div>
            </div>
        </section>
    
    )}

 export default Testimonials