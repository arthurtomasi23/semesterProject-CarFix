import React, { useState } from 'react';
import Link from 'next/link';
import {HomeIcon, CollectionIcon, DocumentAddIcon, BookmarkIcon, CogIcon, UserIcon} from '@heroicons/react/outline';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const isActive = (item) => {
    return activeItem === item ? 'bg-primary' : '';
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-black text-gray-100 text-left">
      <div className="flex items-center justify-center h-16 bg-orange-700">
        <h1 className="text-xl font-bold">CARFIX</h1>
      </div>
      <nav className="flex-grow">
        <ul className="py-4">
          <li className= {` flex items-center flex-row pl-6 py-2 text-gray-300 hover:text-white ${isActive('dashboard')}`}>
            <HomeIcon className="h-6 w-6 text-orange-500 m-4" />
            <Link href="/home" onClick={() => handleItemClick('dashboard')}>
              Home
            </Link>
          </li>
          <li className={`flex items-center flex-row pl-6 py-2 text-gray-300 hover:text-white ${isActive('orders')}`}>
            <CollectionIcon className="h-6 w-6 text-orange-500 m-4" />
            <Link href="/stepbystepguide" onClick={() => handleItemClick('orders')}>
              Step-by-Step Guides
            </Link>
          </li>
          <li className={`flex items-center flex-row pl-6 py-2 text-gray-300 hover:text-white ${isActive('customers')}`}>
            <DocumentAddIcon className="h-6 w-6 text-orange-500 m-4" />
            <Link href="/addguide" onClick={() => handleItemClick('customers')}>
              Add Guide
            </Link>
          </li>
          <li className={`flex items-center flex-row pl-6 py-2 text-gray-300 hover:text-white ${isActive('inventory')}`}>
            <BookmarkIcon className="h-6 w-6 text-orange-500 m-4" />
            <Link href="/savedguides" onClick={() => handleItemClick('inventory')}>
              Saved Cars
            </Link>
          </li>
          <li className={`flex items-center flex-row pl-6 py-2 text-gray-300 hover:text-white ${isActive('reports')}`}>
            <CogIcon className="h-6 w-6 text-orange-500 m-4" />
            <Link href="/settings" onClick={() => handleItemClick('reports')}>
              Settings
            </Link>
          </li>
          <li className={`flex items-center flex-row pl-6 py-2 text-gray-300 hover:text-white ${isActive('reports')}`}>
            <UserIcon className="h-6 w-6 text-orange-500 m-4" />
            <Link href="/account" onClick={() => handleItemClick('reports')}>
              Account
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center h-16 bg-orange-700">
        <p className="text-sm text-left">CARFIX App &copy; 2023</p>
      </div>
    </div>
  );
};

export default Sidebar;
