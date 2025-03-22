import { useState } from 'react';
import {assets} from '../assets/assets'

function Navbar() {
    let sections = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('header nav a')

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop
            let height = sec.offsetHeight
            let id = sec.getAttribute('id')

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active') 
                    document.querySelector('header nav a[href*='+ id + ']').classList.add('active')
                })
            }
        })
    }


    // -------responsive navbar-------------
    const [showMenu, setShowMenu] = useState(false)

    function moveNav() {
        setShowMenu(prevShowMeu => !prevShowMeu)
    }

    const display = {
        height: showMenu ? '70vh': 0,
    }

    return (
        <header className="flex fixed top-0 z-30 bg-white left-0 right-0 items-center justify-between px-[2.5%] mini:px-[5%] h-[3rem] z-200 border-b border-green-800">
            <div className='flex items-center gap-1 cursor-pointer'>
                <img className='w-5 sm:w-7' src={assets.logo} alt="logo"/>
                <h1 className='font-bold whitespace-nowrap text-green-600 text-[14px] micro:text-base sm:text-[21px]' style={{fontFamily: 'monospace'}}>Growlies Salon Services</h1>
            </div>

            {/* Desktop navbar */}
            <nav className='hidden lg:flex text-[18px]'>
                <ul className='flex gap-8'>
                    <li>
                        <a href='#intro' className='active hover:text-green-600 cursor-pointer border-b-2 border-white hover:border-green-800'>Home</a>
                    </li>
                    <li>
                        <a href='#services' className='hover:text-green-600 cursor-pointer border-b-2 border-white hover:border-green-800'>Services</a>
                    </li>
                    <li>
                        <a href='#products' className='hover:text-green-600 cursor-pointer border-b-2 border-white hover:border-green-800'>Products</a>
                    </li>
                    <li>
                        <a href='#appointment' className='hover:text-green-600 cursor-pointer border-b-2 border-white hover:border-green-800'>Appointment</a>
                    </li>
                    <li>
                        <a href='#testimonials' className='hover:text-green-600 cursor-pointer border-b-2 border-white hover:border-green-800'>Reviews</a>
                    </li>
                    <li>
                        <a href='#contact' className='hover:text-green-600 cursor-pointer border-b-2 border-white hover:border-green-800'>Contact</a>
                    </li>
                </ul>
            </nav>

            {/* mobile navbar */}
            <img onClick={moveNav} className='lg:hidden w-4 cursor-pointer' src={assets.barsSolid}/>

            <nav className='absolute lg:hidden w-screen mini:w-[75%] petite:w-[55%] md:w-[47%] sm:w-[50%] right-0 overflow-y-hidden top-[3rem] max-h-[60vh] pl-[2rem] bg-white text-[18px] moving-nav border-green-600 border' style={display}>
                <ul className='mt-[2.4rem] flex-col flex gap-3'> 
                    <li>
                        <a onClick={() => setShowMenu(false)} href="#intro" className='hover:text-green-600'>Home</a>
                    </li>
                    <li>
                        <a onClick={() => setShowMenu(false)} href="#services"  className='hover:text-green-600'>Services</a>
                    </li>
                    <li>
                        <a onClick={() => setShowMenu(false)} href="#products"  className='hover:text-green-600'>Products</a>
                    </li>
                    <li>
                        <a onClick={() => setShowMenu(false)} href="#appointment"  className='hover:text-green-600'>Appointment</a>
                    </li>
                    <li>
                        <a onClick={() => setShowMenu(false)} href="#testimonials"  className='hover:text-green-600'>Reviews</a>
                    </li>
                    <li>
                        <a onClick={() => setShowMenu(false)} href="#contact"  className='hover:text-green-600'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar;