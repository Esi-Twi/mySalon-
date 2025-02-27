import { assets } from "../assets/assets";

function Intro() {
    return(
        <section id="intro" className="intro sm:bg-none sm:h-screen bg-no-repeat text-white sm:text-black h-[95vh] relative flex items-start justify-center flex-col pl-[5%] md:items-end md:pr-[8%] md:text-left">
            <h1 className="font-bold intro-transition text-4xl sm:text-5xl md:text-right text-green-600 w-[90%] md:w-[80%] lg:w-[65%]" style={{fontFamily: 'monospace'}}>A big welcome from the Growlies Family</h1>
            <p className="intro-transition">We are a salon which offer the best services in:</p>
            <ul className="list-disc  intro-transition-2 text-lg ml-8 my-3">
                <li>Ponytails</li>
                <li>Knotless Braids</li>
                <li>goddess Braids</li>
                <li>Cornrows</li>
                <li>Soft Locs</li>
                <li>Any other style of your choice</li>
            </ul>
            <p className="intro-transition-2">We are open to work with you</p>
            <a href="#contact" className="py-1 px-10 mt-4 rounded transition-all hover:text-yellow-400 border-yellow-400 hover:bg-white border-2 intro-transition-2 bg-yellow-500 text-white">Contact Us</a>
            <img src={assets.hairstyle0} className="hidden lg:w-full md:h-[95vh] md:left-0 sm:flex absolute h-[90vh] -z-20 top-[2rem] right-0 w-[60%]"/>
        </section>
    )
}

export default Intro;