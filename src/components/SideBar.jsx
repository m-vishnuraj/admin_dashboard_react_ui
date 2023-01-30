
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import CompanyLogo from '../assets/logo.png'

const SideBar = forwardRef(({ showNav }, ref) => {

    const router = useLocation();
    return (
        <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
            {/* Sidebar Logo */}
            <div className='flex justify-center mt-6 mb-14'>
                <img src={CompanyLogo} className='w-20 h-auto' alt="company logo" />
            </div>
            {/* Sidebar Menu */}
            <div className='flex flex-col'>
                <Link to='/'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/"
                            ? 'bg-orange-100 text-orange-500'
                            : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'}`}>
                        <div className='mr-2'>
                            <HomeIcon className='w-5 h-5' />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/account'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/account"
                            ? 'bg-orange-100 text-orange-500'
                            : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'}`}>
                        <div className='mr-2'>
                            <UserIcon className='w-5 h-5' />
                        </div>
                        <p>Account</p>
                    </div>
                </Link>
                <Link to='/billing'>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${router.pathname === "/billing"
                            ? 'bg-orange-100 text-orange-500'
                            : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'}`}>
                        <div className='mr-2'>
                            <CreditCardIcon className='w-5 h-5' />
                        </div>
                        <p>Billing</p>
                    </div>
                </Link>
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';

export default SideBar;