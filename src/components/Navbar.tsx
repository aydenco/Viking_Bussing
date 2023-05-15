import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import LoginButton from '../custom-hooks/LoginButton';
import LogoutButton from '../custom-hooks/LogoutButton';

// TODO: Change tab names and color scheme, fix auth system

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const clicked = () => {
        setIsVisible(false)
    }
    
  return (
    <nav className='flex item-center justify-between rounded-xl flex-wrap bg-navy p-4'>
        <div className='flex item-center flex-shrink-0 text-gold mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Viking Bussing</Link>
        </div>
        <div className='w-full block flex-grow items-center'>
            <div className="text-sm lg:flex-grow">
                <Button className='p-3 m-5 bg-gold justify-center rounded-xl'>
                    <div>
                        <Link to='/' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-teal font-bold hover:text-white ml-2 mr-2'>
                            Home
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-gold justify-center rounded-xl'>
                    <div>
                        <Link to='/yourprofile' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-teal font-bold hover:text-white ml-2 mr-2'>
                            Your Profile
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-gold justify-center rounded-xl'>
                    <div>
                        <Link to='/busroutes' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-teal font-bold hover:text-white ml-2 mr-2'>
                            Bus Routes
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-gold justify-center rounded-xl'>
                    <div>
                        <Link to='/faqs' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-teal font-bold hover:text-white ml-2 mr-2'>
                            FAQs
                        </Link>
                    </div>
                </Button>
                <Button className='p-3 m-5 bg-gold justify-center rounded-xl'>
                    <div>
                        <Link to='/contactus' onClick={ clicked } className='flex place-items-center mt-0 lg:inline-block lg:mt-0
                        text-teal font-bold hover:text-white ml-2 mr-2'>
                            Contact Us
                        </Link>
                    </div>
                </Button>
                <LoginButton></LoginButton>
                <LogoutButton></LogoutButton>
            </div>
        </div>
    </nav>
  )
}

export default Navbar