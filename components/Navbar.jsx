'use client';
import { Package, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUser, useClerk, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/shop?search=${encodeURIComponent(search)}`);
      setSearch(''); // Clear search input after submission
    }
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">
          {/* Logo */}
          <Link href="/" className="relative text-4xl font-semibold text-slate-700">
            <span className="text-green-600">Part</span>cart
            <span className="text-green-600 text-5xl leading-0">.</span>
            <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
              plus
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <Link href="/shop" className="hover:text-green-600">Shop</Link>
            <Link href="/about" className="hover:text-green-600">About</Link>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>

            <form
              onSubmit={handleSearch}
              className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full"
            >
              <Search size={18} className="text-slate-600" aria-hidden="true" />
              <input
                className="w-full bg-transparent outline-none placeholder-slate-600"
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
              />
            </form>

            <Link href="/cart" className="relative flex items-center gap-2 text-slate-600 hover:text-green-600">
              <ShoppingCart size={18} aria-label="Cart" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 left-4 text-xs text-white bg-slate-600 h-5 w-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <UserButton afterSignOutUrl="/">
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<Package size={16} />}
                    onClick={() => router.push('/orders')}
                  />
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<ShoppingCart size={16} />}
                    onClick={() => router.push('/cart')}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={() => openSignIn()}
                className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
                aria-label="Login or Sign Up"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden">
            {user ? (
              <UserButton afterSignOutUrl="/">
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<Package size={16} />}
                    onClick={() => router.push('/orders')}
                  />
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<ShoppingCart size={16} />}
                    onClick={() => router.push('/cart')}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={() => openSignIn()}
                className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full"
                aria-label="Login or Sign Up"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </nav>
  );
};

export default Navbar;