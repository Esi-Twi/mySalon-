
function Services() {
    return(
        <section id='services' className="h-[80vh] flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold mb-[1rem] petite:mb-[2rem]">Our <span className="underline text-green-600">Services</span></h1>
            <div className="flex justify-center gap-[2rem] petite:gap-[20%] w-[90%] flex-col petite:flex-row">
                <div>
                    <p className="text-2xl text-yellow-400">Salon Services</p>
                    <ul className="list-disc text-lg ml-8">
                        <li>Hair Washing</li>
                        <li>Braiding</li>
                        <li>Styling Hair</li>
                        <li>Aloe Vera Treatment</li>
                        <li>Avacado Treatment</li>
                        <li>Perming Hair</li>
                    </ul>
                </div>

                <div>
                    <p  className="text-2xl text-yellow-400">Delivery-option</p>
                    <ul className="list-disc text-lg ml-8">
                        <li>Walk-in</li>
                        <li>Appointment</li>
                        <li>Home Service</li>
                    </ul>
                </div>
            </div>

            <div className="ml-[1rem] petite:ml-0">
                <p className="text-green-600 text-lg mt-4">Location</p>
                <p className="text-gray-600 text-base">Adabraka inside the GNTC building Top Floor</p>
            </div>
        </section>
    )
}

export default Services;
