import {Menu,X} from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {

    const [mobileMenuOpen,setMobileMenuOpen] = useState(false)
    
    const toggleNavbar = ()=>{
        setMobileMenuOpen(!mobileMenuOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center" >
                <div className="logo flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo"/>
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>

                <ul className="links hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item,index)=>(
                        <li  key={index}>
                            <a href={item.href}>{item.label}
                            </a>
                            </li>
                        ))}
                </ul>

                <div className="btns hidden lg:flex justify-center items-center space-x-12">
                    <a href='#' className='py-2 px-3 border rounded-md'>Log In</a>

                    <a href='#' className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>Sign In</a>
                </div>
                <div className="menu-btn flex-col justify-end lg:hidden">
                    <button onClick={toggleNavbar}>
                        {mobileMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>
                
            </div>
                        
            {mobileMenuOpen && (
                <div className="mobile-links fixed right-0 z-20  bg-neutral-900 flex flex-col justify-center items-center w-full lg:hidden p-10">
                    <ul className='pb-3'>
                    {navItems.map((item,index)=>(
                        <li className='py-4'  key={index}>
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                        ))}
                    </ul>

                    <div className="mobile-btns flex justify-between md:justify-around w-full">

                    <a href='#' className='py-2 px-3 border rounded-md'>Log In</a>

                    <a href='#' className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md'>Sign In</a>

                    </div>

                </div>
            )}                

        </div>

    </nav>
  )
}
export default Navbar