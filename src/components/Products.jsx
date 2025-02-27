import { assets } from "../assets/assets";

function Products() {
    return(
        <section id='products' className="products purple h-[130vh] sm:h-[130vh] sm:text-black pl-[4.5%] sm:pr-[5%] relative sm:bg-none sm:items-end flex items-start petite:pl-[8%] justify-center flex-col petite:h-[110vh] text-white md:pr-[20%] lg:pr-[30%]">

            <h1 className="font-bold z-10 text-[22px] petite:text-2xl w-[100%] sm:w-[60%] text-center font-mono text-yellow-500">Check out our amazing hair products</h1>
            <div className="z-10 mt-6 flex flex-col gap-4 mb-6">
                <div >
                    <p className="text-xl font-bold sm:text-white text-green-800">Hair growth products</p>
                    <ul className="list-disc ml-8 text-lg">
                        <li>Glove Olive Oil</li>
                        <li>Lily Dandelon Oil</li>
                        <li>Nanu Shampoo</li>
                        <li>Hivey Shampoo</li>
                        <li>Green Moss Cream</li>
                        <li>Mani Hair Oil</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-bold sm:text-white text-green-800">Perming Creams</p>
                    <ul className="list-disc ml-8 text-lg">
                        <li>Glowing Cream</li>
                        <li>Olivia Cream</li>
                        <li>Secret Beauty Cream</li>
                        <li>Absolute Cream</li>
                        <li>Analy Cream</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-bold sm:text-white text-green-800">Our Dandruff Products</p>
                    <ul className="list-disc ml-8 text-lg">
                        <li>Glove Dandruff Cream</li>
                        <li>Shines' Dandruff Cream</li>
                        <li>Nanu Dandruff</li>
                        <li>Hivel Oil</li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-3 mt-4 z-10">
                <a href="#contact" className="bg-yellow-400 transition-all hover:text-yellow-400 hover:bg-white hover:border-yellow-400 border-2 border-[purple] rounded py-1 px-5">Contact Us</a>
                <p className="text-gray-300 text-lg">and get your now!!</p>
            </div>
            <img src={assets.braidedGirl} className="hidden sm:flex h-full absolute left-0 top-0 lg:w-[40%] md:w-[50%] w-[70%] "/>
        </section>
    )
}

export default Products