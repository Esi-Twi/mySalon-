import { assets } from "../assets/assets"

function Footer() {
    return(
        <footer className="border-t border-green-800">
            <div className="flex items-center justify-between h-[35vh] md:justify-center md:gap-[20%] px-5 sm:px-8">
                <div className="flex flex-col text-sm min:text-base gap-[2px] mini:gap-1">
                    <a href="#intro" className="hover:text-green-600 hover:border-b-2 border-green-800 pb">Home</a>
                    <a href="#services" className="hover:text-green-600 hover:border-b-2 border-green-800">Services</a>
                    <a href="#products" className="hover:text-green-600 hover:border-b-2 border-green-800">Products</a>
                    <a href="#appointment" className="hover:text-green-600 hover:border-b-2 border-green-800">Appointment</a>
                    <a href="#testimonials" className="hover:text-green-600 hover:border-b-2 border-green-800">Review</a>
                    <a href="#contact" className="hover:text-green-600 hover:border-b-2 border-green-800 pb">Contact</a>
                </div>
                <div className="text-[12px] mini:text-base">
                    <p className="flex items-center text-green-800 cursor-pointer gap-1"><img className="w-3 mini:w-6" src={assets.facebook}/> @Growlies Salon Serivces</p>

                    <p className="flex items-center my-4 text-green-800 cursor-pointer gap-1"><img className="w-3 mini:w-4"  src={assets.tiktok}/> @growlies_salonservices_</p>

                    <p className="flex items-center text-green-800 cursor-pointer gap-1"><img className="w-3 mini:w-5"  src={assets.instagram}/> @Growlies_salonServices</p>
                </div>
            </div>
            <p className="text-gray-700 text-[13px] mini:text-sm border-t text-center border-green-700 py-2">Growlies Salon Services | Copyright by Esi Twi Tawiah</p>
        </footer>
    )
}

export default Footer