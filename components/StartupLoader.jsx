'use client'
import { useEffect, useState } from 'react'

const StartupLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsVisible(false)
                        onComplete()
                    }, 500)
                    return 100
                }
                return prev + 2
            })
        }, 50)

        return () => clearInterval(interval)
    }, [onComplete])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold">
                        <span className="text-green-600">Part</span>
                        <span className="text-slate-700 dark:text-slate-300">Palace</span>
                        <span className="text-green-600 text-7xl leading-0">.</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-4">Loading your marketplace...</p>
                </div>
                
                <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">{progress}%</p>
            </div>
        </div>
    )
}

export default StartupLoader