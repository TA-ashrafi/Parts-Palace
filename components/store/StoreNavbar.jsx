'use client'
import Link from "next/link"

const StoreNavbar = () => {


    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all">
            <Link href="/" className="relative text-4xl font-semibold text-slate-700 dark:text-slate-300">
                <span className="text-green-600">Part</span>Palace<span className="text-green-600 text-5xl leading-0">.</span>
                <p className="absolute text-xs font-semibold -top-1 -right-11 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
                    Store
                </p>
            </Link>
            <div className="flex items-center gap-3">
                <p className="text-slate-600 dark:text-slate-300">Hi, Seller</p>
            </div>
        </div>
    )
}

export default StoreNavbar