import { assets } from "../assets/assets"

function Footer() {
    return(
        <footer className="border-t border-green-800">
            <div className="flex flex-col gap-3 py-[2.5rem] petite:px-[5rem] sm:px-[20%] px-5">
                <p className="flex items-center gap-3">
                    <img className="w-5" src={assets.phone}/> 0543129196</p>
                <p className="flex items-center gap-3">
                    <img className="w-5" src={assets.email}/> growliessalon@gmail.com</p>

                <p className="flex items-center text-green-800 cursor-pointer gap-3">
                    <img className="w-4" src={assets.facebook}/> @Growlies Salon Serivces</p>

                <p className="flex items-center text-green-800 cursor-pointer gap-3">
                    <img className="w-4"  src={assets.tiktok}/> @growlies_salonservices_</p>

                <p className="flex items-center text-green-800 cursor-pointer gap-3">
                    <img className="w-4"  src={assets.instagram}/> @Growlies_salonServices</p>
            </div>

            <p className="text-gray-700 text-[11px] micro:text-sm border-t text-center border-green-700 py-2">Growlies Salon Services | Copyright by Esi Twi Tawiah</p>
        </footer>
    )
}

export default Footer