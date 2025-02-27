import { useState } from "react";


function Contact() {
    const [contactData, setContactData] = useState({
        name: '', 
        contact: '', 
        message: ''
    })

    function addContactInfo(e) {
        setContactData(prevData => {
            return {
                ...prevData, 
                [e.target.name]: e.target.value
            }
        })
    }

    function submitForm(e) {
        e.preventDefault()

        if(contactData.name && contactData.contact && contactData.message) {
            alert('Thank you for sending us a message you will receive your reply soon. \n Have a nice day.')

            setContactData(prevData => {
                return {
                    ...prevData, 
                    name: '', 
                    contact: '', 
                    message: ''
                }
            })
        } else {
            alert('Please fill all form spaces')            
        }
        
    }

    return(
        <section id='contact' className="flex items-center h-[80vh] justify-center flex-col">
            <h1 className="font-bold text-2xl mini:text-3xl">Contact <span className="underline text-green-600">Us</span></h1>
            <p className="text-gray-700 mb-3 text-sm text-center mini:text-base">Send us an email and be rest assured we will responsed</p>

            <form onSubmit={submitForm} autoComplete="off" className="mt-[2rem] max-w-[80vw] flex items-center justify-center gap-3 flex-col">
                <input className="border md:w-[22rem] w-[14rem] mini:w-[20rem] rounded border-black py-1 px-2" placeholder="Name"
                      onChange={addContactInfo}
                      name='name'
                      value={contactData.name}/>

                <input className="border md:w-[22rem] w-[14rem] mini:w-[20rem] rounded border-black py-1 px-2" placeholder="Phone Number"
                      onChange={addContactInfo}
                      name='contact'
                      value={contactData.contact}/>

                <textarea rows='4' className="border resize-none md:w-[25rem] w-[17rem] mini:w-[23rem] rounded border-black py-1 px-2" 
                    placeholder="Please leave your message here"
                    onChange={addContactInfo}
                    name='message'
                    value={contactData.message}/>
                
                <button className="bg-green-800 transition-all hover:shadow-md hover:shadow-black text-white rounded-sm cursor-pointer py-1 px-8">
                    Send</button>
            </form>
        </section>
    )
}

export default Contact;