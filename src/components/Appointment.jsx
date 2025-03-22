import { useState } from "react";

function Appointment() {
    const [appointmentData, setAppointmentData] = useState({
        name: '', 
        number: '',
        address: '', 
        startDate: '',
        endDate: '',
        message: ''
    })

    function getData(e) {
        setAppointmentData(prevData => {
            return {
                ...prevData, 
                [e.target.name]: e.target.value
            }
        })        
    }

    function submit(e) {
        e.preventDefault()

        if(appointmentData.name && appointmentData.address && appointmentData.address && appointmentData.endDate && appointmentData.number && appointmentData.startDate && appointmentData.message) {
            alert('Thank you for sending us a message you will receive your reply soon. \n Have a nice day.')

            setAppointmentData(prevData => {
                return {
                    ...prevData, 
                    name: '', 
                    number: '',
                    address: '', 
                    startDate: '',
                    endDate: '',
                    message: ''
                }
            })
        } else {
            alert('Please fill all form spaces')            
        }
    }

    return(
        <section id='appointment' className="h-[100vh] flex flex-col items-center petite:w-auto justify-center">

            <h1 className="font-bold text-[22px] petite:text-3xl">Book an <span className="underline text-green-600">Appointment</span></h1>
            <p className="text-gray-600 text-base">Get your hair down with us</p>

            <form onSubmit={submit} autoComplete="off" className="w-[85%] ml-[4%] micro:w-[65vw] md:w-[45vw] lg:w-[35%] mt-10">
                <input className="w-[87%] petite:w-[17rem] md:w-[19rem] border-b-2 border-green-600 px-3 py-1 text-base" placeholder="Name"
                           onChange={getData}
                           name='name'
                           value={appointmentData.name}/>

                <input className="w-[87%] petite:w-[17rem] md:w-[19rem] border-b-2 my-3 border-green-600 px-3 py-1 text-base"  placeholder="Telephone Number"
                                 onChange={getData}
                                 name='number'
                                 value={appointmentData.number}/>

                <input className="w-[87%] petite:w-[17rem] md:w-[19rem] border-b-2 mb-3 border-green-600 px-3 py-1 text-base" placeholder="Address"
                                onChange={getData}
                                name='address'
                                value={appointmentData.address}/>

                <p className="mt-4 mb-2">Choose a date range for your appointment</p>

                <div className="flex flex-col mini:flex-row gap-3">
                    <input className="border w-[8.3rem] petite:w-[10rem] rounded mr-2 petite:mr-4 border-black px-3 py-1 text-base" type='date'
                    onChange={getData}
                    name='startDate'
                    value={appointmentData.startDate}/>

                    <input className="border w-[8.3rem] petite:w-[10rem] rounded border-black px-3 py-1 text-base" type='date'
                    onChange={getData}
                    name='endDate'
                    value={appointmentData.endDate}/>
                </div>

                <textarea rows='4' className="w-[100%] petite:w-[22rem] md:w-[28rem] mt-4 border resize-none border-black rounded px-3 py-1 text-base"  placeholder="Add your message"
                    onChange={getData}
                    name='message'
                    value={appointmentData.message}/>

                <button className="bg-green-800 ml-[30%] hover:shadow-md hover:shadow-black md:ml-[50%] block rounded py-1 px-6 mt-2 text-white">Submit</button>
            </form>
        </section>
    )
}

export default Appointment;