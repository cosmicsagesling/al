
// app/components/Navbar.tsx
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <nav className="flex bg-white items-center justify-between px-4 py-3 border-b">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/al_logo.png" alt="Geeks Logo" width={60} height={60} />
        </Link>

      </div>
      
      
      
      <div className="flex items-center space-x-3">
        
        <Link href="/login" className="px-4 py-3 ring-1 ring-slate-300 text-black border rounded-lg text-sm">
          Sign Up
        </Link>
        
        <Link href="/login" className="px-5 py-3 bg-blue-600 text-white rounded-lg text-sm">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;